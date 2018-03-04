import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx'
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    Observable.fromEvent(document, 'click')
    //.mergeMap(() => this.httpClient.get('https://api.github.com/users'), (event, users) => ( [event, users] ))
    .mergeMap(() => this.httpClient.get('https://api.github.com/users'), (event, users) => ({ event, users }))
      .subscribe((resp) => {
        console.log(resp);
        //console.log(e['pageX'], e['pageY']);
      });
  }

}
