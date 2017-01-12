import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
import * as _ from 'lodash';

import { environment } from '../../environments/environment';

const languageKey = 'language';

@Injectable()
export class I18nService {

  constructor(private translateService: TranslateService) { }

  /**
   * Loads language from local storage if present, or sets default language.
   */
  init() {
    this.setLanguage();

    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => { localStorage.setItem(languageKey, event.lang); });
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param {string=} language The IETF language code to set.
   */
  setLanguage(language?: string) {
    language = language || localStorage.getItem(languageKey);
    let isSupportedLanguage = _.includes(environment.supportedLanguages, language);

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = environment.defaultLanguage;
    }

    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return {string} The current language code.
   */
  getLanguage(): string {
    return this.translateService.currentLang;
  }

}
