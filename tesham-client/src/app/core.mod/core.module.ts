// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// App
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { reducers } from './store/index-store';


@NgModule({
  declarations:
    [LoginComponent, SignupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authentication', reducers),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
})
export class CoreModule {
}
