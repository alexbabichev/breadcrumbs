import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';


export interface Breadcrumb {
  label: string;
  link?: string;
}

export const routesMock = [
  '/new/mp/courses',
  '/new/mp/courses/1677',
  '/new/mp/service-templates',
  '/new/mp/service-templates/1650',
  '/new/mp/meal-cycles',
  '/new/mp/meal-cycles/1621'
];

// Use the CheckOnce strategy, meaning that automatic change 
// detection is deactivated until reactivated by setting the 
// strategy to Default (CheckAlways). Change detection can still be 
// explicitly invoked.

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {

  @Input()
  breadcrumbs?: Breadcrumb[];

  @Input()
  url?: string;

  @Input()
  childLabel?: string;

  constructor(private router: Router) {
    this.url = this.url || this.router.url;
  }

  ngOnInit() {    
    if (this.breadcrumbs)
      return;

    const url = this.url.split('/');
    const hasChild = !!url[4];
    const label = url[3]
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');

    const returnArr: Breadcrumb[] = [{
      label: 'Meal Planning',
      link: '/orders'
    }, {
      label: 'Service Offering'
    }];

    if (hasChild) {
      returnArr.push({ label, link: url.slice(0, -1).join('/') });
      returnArr.push({ label: this.childLabel || 'childLabel' })
    } else {
      returnArr.push({ label })
    }

    this.breadcrumbs = returnArr;
  }

}

