import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { API_PATH, ProxyService } from '../../proxy/services/proxy.service';

@Component({
  selector: 'te-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signUpFormGroup: FormGroup;
  // TODO validation && crypt password
  constructor(private proxyService: ProxyService) {
    this.signUpFormGroup = new FormGroup({
      email: new FormControl(null),
    password: new FormControl(null)
    });
  }

  ngOnInit() {
  }
public onClickSubmit(): void {
  this.proxyService.postProxy(API_PATH.CREATE_NEW_USER, {
    email: this.signUpFormGroup.get('email').value ,
    password: this.signUpFormGroup.get('password').value
  }).subscribe((result) => {
    console.log(result);
  });
}
}
