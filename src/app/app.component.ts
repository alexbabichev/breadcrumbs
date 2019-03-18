import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breadcrumbs';

  testBreadcrumbs = [
    {
      label: 'Meal Planning',
      link: '/orders'
    }, {
      label: 'Service Offering'
    }, {
      label: 'Courses'
    }
  ];

  constructor() { }
}
