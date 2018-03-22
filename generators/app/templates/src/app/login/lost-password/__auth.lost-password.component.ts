import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, Logger } from '@app/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

const log = new Logger('LostPassword');

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit {

  error: string;
  lostPasswordForm: FormGroup;
  isLoading = false;

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  renewPassword() {
    this.isLoading = true;
    this.authenticationService.renewPassword(this.lostPasswordForm.value)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe(() => {
        log.debug(`Password renewed!`);
        this.router.navigate(['/'], {replaceUrl: true});
      }, (error) => {
        log.debug(`Password renew failed with error: ${error}`);
        this.error = error;
      });
  }

  private createForm() {
    this.lostPasswordForm = this.formBuilder.group({
      username: ['', Validators.required]
    });
  }


}
