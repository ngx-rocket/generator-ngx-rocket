import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { includes } from 'lodash';

import enUS from '../../translations/en-US.json';
import frFR from '../../translations/fr-FR.json';

const languageKey = 'language';

@Injectable()
export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(private translateService: TranslateService) {
    // Embed languages to avoid extra HTTP requests
    translateService.setTranslation('en-US', enUS );
    translateService.setTranslation('fr-FR', frFR);
  }

  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param {!string} defaultLanguage The default language to use.
   * @param {Array.<String>} supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = null;

    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => { localStorage.setItem(languageKey, event.lang); });
  }

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param {string} language The IETF language code to set.
   */
  set language(language: string) {
    language = language || localStorage.getItem(languageKey);
    const isSupportedLanguage = includes(this.supportedLanguages, language);

    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return {string} The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }

}
