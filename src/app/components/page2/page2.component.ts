import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResolverService } from '../../services/resolver.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private resolverService: ResolverService) { }

  ngOnInit() {
		this.activatedRoute.data['users'];
  }

}
