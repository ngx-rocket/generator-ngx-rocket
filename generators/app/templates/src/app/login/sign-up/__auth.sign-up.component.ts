import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, Logger } from '@app/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

const log = new Logger('SignUp');

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  error: string;
  signUpForm: FormGroup;
  isLoading = false;


  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  signUp() {
    this.isLoading = true;
    this.authenticationService.signUp(this.signUpForm.value)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe(() => {
        log.debug(`Sign up successful!`);
        this.router.navigate(['/'], {replaceUrl: true});
      }, (error) => {
        log.debug(`Sign up error: ${error}`);
        this.error = error;
      });
  }

  private createForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: (abstractControl: AbstractControl) => {
        const passwordControl = abstractControl.get('password');
        const confirmPasswordControl = abstractControl.get('confirmPassword');
        let error = null;
        if (passwordControl.value !== confirmPasswordControl.value) {
          error = {matchPassword: true};
        }
        confirmPasswordControl.setErrors(error);
        return error;
      }
    });
  }

}
