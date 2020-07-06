import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-data',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
