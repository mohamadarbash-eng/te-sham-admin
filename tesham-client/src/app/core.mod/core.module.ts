// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// App
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { authenticationReducer } from './store/authentication.reducer';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';


@NgModule({
  declarations:
    [LoginComponent, SignupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authentication', authenticationReducer)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
})
export class CoreModule {
}
