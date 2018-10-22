import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
<% if (props.ui === 'ionic') { -%>
import { LoadingController, Platform } from '@ionic/angular';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
<% } -%>
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, AuthenticationService } from '@core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
<% if (props.ui !== 'ionic') { -%>
  isLoading = false;
<% } -%>

  constructor(private router: Router,
              private formBuilder: FormBuilder,
<% if (props.ui === 'ionic') { -%>
              private platform: Platform,
              private loadingController: LoadingController,
<% } -%>
              private authenticationService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit() { }

  login() {
<% if (props.ui === 'ionic') { -%>
<% /**
     * currently a workaround for ionic zone handling - needs rewrite for readability.
     * See: https://github.com/ngx-rocket/generator-ngx-rocket/pull/369#discussion_r217625108
     * Revert https://github.com/ngx-rocket/generator-ngx-rocket/pull/369/commits/4969a42a7a56a03e699498c70d987a23eea1aee4
     * when ionic overlay zone handling works again
     * Also see https://github.com/angular/zone.js/issues/1142
     */
-%>
    // const loadingPromise = this.loadingController.create();
    // const loadingPresentedPromise = loadingPromise
    //  .then(loading => loading.present());
<% } else { -%>
    this.isLoading = true;
<% } -%>
    this.authenticationService.login(this.loginForm.value)
      .pipe(finalize(() => {
        this.loginForm.markAsPristine();
<% if (props.ui === 'ionic') { -%>
        // loadingPresentedPromise.then(() => loadingPromise.then(loading => loading.dismiss()));
<% } else { -%>
        this.isLoading = false;
<% } -%>
      }))
      .subscribe(credentials => {
        log.debug(`${credentials.username} successfully logged in`);
        this.router.navigate(['/'], { replaceUrl: true });
      }, error => {
        log.debug(`Login error: ${error}`);
        this.error = error;
      });
  }

<% if (props.ui === 'ionic') { -%>

  get isWeb(): boolean {
    return !this.platform.is('cordova');
  }
<% } -%>

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }

}
