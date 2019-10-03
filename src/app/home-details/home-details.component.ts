import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {
  name: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    alert('hi');
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.name = parseInt(params.name, 10));
    console.log(this.name, 'name........');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
