import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { API_PATH, ProxyService } from '../../proxy/services/proxy.service';
import { Store } from '@ngrx/store';
import { AuthenticateAction } from '../../store/authenticate.action';
import { AuthenticateState } from '../../store/authenticate.reducer';


@Component({
  selector: 'te-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginFormGroup: FormGroup;
  // TODO validation
  constructor(private proxyService: ProxyService, private store: Store<AuthenticateState>) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  public onClickSubmit(): void {
 // TODO add ? validation && crypt password
    this.proxyService.postProxy(API_PATH.LOGIN_USER, {
      email: this.loginFormGroup.get('email').value ,
      password: this.loginFormGroup.get('password').value
    }).subscribe((result) => {
    if (result && result.token) {
      console.log(result.token);
     this.store.dispatch(new AuthenticateAction(
       {user: {email: this.loginFormGroup.get('email').value}, authenticate: {loggedIn: true, token: result.token}}));
      return;
    }
    });
  }
}
