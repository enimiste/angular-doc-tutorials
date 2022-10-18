import { BehaviorSubject, interval, map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public messages$: BehaviorSubject<string> = new BehaviorSubject("");
  public form: FormGroup = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  constructor(private readonly fb: FormBuilder) { }

  doLogin(): void {
    if(this.form.valid)
      this.messages$.next(`${new Date().getMilliseconds()} : (${this.username.value}, ${this.password.value})`);
  }

  get username() {
    return this.form.get('username') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }
}
