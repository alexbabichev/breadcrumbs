import { Component } from '@angular/core';
import { Breadcrumb } from './breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breadcrumbs';

  breadcrumbs1: Breadcrumb[] = [{
    label: 'Meal Planning',
    link: '/orders'
  }, {
    label: 'Service Offering'
  }, {
    label: 'Courses'}
  ];

  breadcrumbs1a: Breadcrumb[] = [{
    label: 'Meal Planning',
    link: '/orders'
  }, {
    label: 'Service Offering'
  }, {
    label: 'Courses',
    link: 'listview'
  }, {
    label: 'Course TwoCourse'
  }];

  

  breadcrumbs2: Breadcrumb[] = [{
    label: 'Meal Planning',
    link: '/orders'
  }, {
    label: 'Service Offering'
  }, {
    label: 'Service Templates',
  }];

  breadcrumbs2a: Breadcrumb[] = [{
    label: 'Meal Planning',
    link: '/orders'
  }, {
    label: 'Service Offering'
  }, {
    label: 'Service Templates',
    link: 'listview'
  }, {
    label: 'HugeRatio3'
  }];

  breadcrumbs3: Breadcrumb[] = [{
    label: 'Meal Planning',
    link: '/orders'
  }, {
    label: 'Meal Cycles',
  }];

  breadcrumbs3a: Breadcrumb[] = [{
    label: 'Meal Planning',
    link: '/orders'
  }, {
    label: 'Meal Cycles',
    link: 'listview'
  }, {
    label: '3 Cycle'
  }];
  
}
