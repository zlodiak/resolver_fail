import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ResolverService {

  constructor(private httpClient: HttpClient,
              private router: Router) {}

  resolve(): any {
    return this.httpClient.get('https://api.github.com/users').subscribe(
      (next) => {
        console.log(next);
        return next;
      },
      (error) => {
        console.log('error');
        this.router.navigate(['/page1']);
        return null;
      }
    );
  }  

}
