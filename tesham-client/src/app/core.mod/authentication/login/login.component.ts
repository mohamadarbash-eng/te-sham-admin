import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { API_PATH, ProxyService } from '../../proxy/services/proxy.service';
import { Store } from '@ngrx/store';
import { UserLoggedIn, UserLoginInterface } from '../../store/authentication.action';


@Component({
  selector: 'te-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  // TODO validation
  constructor(private proxyService: ProxyService, private store: Store<UserLoginInterface>) {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });



  }

  ngOnInit() {
  }
  public onClickSubmit(): void {
 // TODO add ? validation && crypt password
    this.proxyService.postProxy(API_PATH.LOGIN_USER, {
      email: this.loginFormGroup.get('email').value ,
      password: this.loginFormGroup.get('password').value
    }).subscribe((result) => {
      this.store.dispatch(new UserLoggedIn({login: result.login}));
      console.log(result);
    });
    this.store.select('authentication').subscribe((data) => {
      console.log(data);
    });
  }

}
