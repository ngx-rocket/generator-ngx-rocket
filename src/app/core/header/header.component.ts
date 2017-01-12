import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { I18nService } from '../i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden: boolean = true;
  languages = environment.supportedLanguages;

  constructor(private i18nService: I18nService) { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.setLanguage(language);
  }

  get currentLanguage(): string {
    return this.i18nService.getLanguage();
  }

  ngOnInit() { }

}
