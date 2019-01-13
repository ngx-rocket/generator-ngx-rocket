import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  tabs = [
    { name: 'home', route: 'home', title: 'Home', icon: 'home' },
    { name: 'about', route: 'about', title: 'About', icon: 'logo-angular' },
    { name: 'settings', route: 'settings', title: 'Settings', icon: 'cog' }
  ];
  selectedTabName$: Observable<string>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const firstRoute$ = of(activatedRoute);
    const navEventRoutes$ = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => activatedRoute)
    );
    this.selectedTabName$ = merge(firstRoute$, navEventRoutes$).pipe(map(route => this.routeToTabId(route)));
  }
  private routeToTabId(route: ActivatedRoute) {
    if (!route || !route.firstChild) {
      return;
    }
    if (route && route.component === ShellComponent && route.firstChild) {
      route = route.firstChild;
      return this.tabs.find(tabElement => tabElement.route === route.routeConfig.path).name;
    }
  }
}
