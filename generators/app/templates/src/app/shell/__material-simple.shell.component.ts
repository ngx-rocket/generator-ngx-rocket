import { Component, OnInit, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

import { UntilDestroy, untilDestroyed } from '@shared';

@UntilDestroy()
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;

  constructor(private breakpoint: BreakpointObserver) { }

  ngOnInit() {
    // Automatically close side menu on screens > small breakpoint
    this.breakpoint
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        filter(({ matches }) => !matches),
        untilDestroyed(this)
      )
      .subscribe(() => this.sidenav.close());
  }

}
