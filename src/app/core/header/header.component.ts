import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden: boolean = true;
  languages = ['en-US', 'fr-FR'];
  currentLocale = 'en-US';

  constructor() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.currentLocale = language;
  }

  ngOnInit() { }

}
