import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Breadcrumb {
  label: string;
  link?: string;
}

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
  breadcrumbs: Breadcrumb[] = [];

  constructor() { }

}

