import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Tab } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { SettingsComponent } from '@app/settings/settings.component';
import { AboutComponent } from '@app/about/about.component';
import { HomeComponent } from '@app/home/home.component';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  tabs = [
    { component: HomeComponent, name: 'home', route: 'home', title: 'Home', icon: 'home' },
    { component: AboutComponent, name: 'about', route: 'about', title: 'About', icon: 'logo-angular' },
    { component: SettingsComponent, name: 'settings', route: 'settings', title: 'Settings', icon: 'cog' }
  ];
  selectedTabIndex: number;
  subscription: any;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.updateTab(this.activatedRoute);
  }
  onTabChange(selectedTabElm: Tab) {
    const selectedTab = this.tabs.find(tab => tab.name === selectedTabElm.name);
    this.router.navigate([selectedTab.route]);
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
      this.selectedTabIndex = this.tabs.findIndex(tab => tab.route === route.routeConfig.path);
    }
  }
}
