import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsComponent } from '@app/settings/settings.component';
import { AboutComponent } from '@app/about/about.component';
import { HomeComponent } from '@app/home/home.component';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  tabs = [
    { component: HomeComponent, name: 'home', route: 'home', title: 'Home', icon: 'home' },
    { component: AboutComponent, name: 'about', route: 'about', title: 'About', icon: 'logo-angular' },
    { component: SettingsComponent, name: 'settings', route: 'settings', title: 'Settings', icon: 'cog' }
  ];
  selectedTabName: string;
  private routeEventSubscription: Subscription;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.updateTab(this.activatedRoute);
    // Update ionic selected tab based on angular route events
    this.routeEventSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateTab(this.activatedRoute));
  }
  ngOnDestroy() {
    if (this.routeEventSubscription) {
      this.routeEventSubscription.unsubscribe();
    }
  }
  private updateTab(route: ActivatedRoute) {
    if (!route || !route.firstChild) {
      return;
    }
    if (route && route.component === ShellComponent && route.firstChild) {
      route = route.firstChild;
      // Fixed the bug#19420 : route.component is undefined if module is lazy
      // See: https://github.com/angular/angular/issues/19420
      while (route.firstChild) {
        route = route.firstChild;
      }
      // Fixed #19420 end
      this.selectedTabName = this.tabs.find(tabElement => tabElement.route == route.routeConfig.path).name;
    }
  }
}
