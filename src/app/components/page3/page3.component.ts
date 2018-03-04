import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    Observable.timer(0, 3000).do((v) => {
      return setTimeout(() => {
        console.log('tick', v);
      });
    }).subscribe((r) => {
      console.log(r);
    });
  }

}
