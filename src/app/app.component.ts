import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';
import { Logger, LogLevel } from './core/logger.service';

const log = new Logger('app');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    if (environment.production) {
      Logger.level = LogLevel.Warning;
    }

    log.debug('init');
  }

}
