// Angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// App
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { authenticationReducer } from './store/authentication.reducer';


@NgModule({
  declarations:
    [LoginComponent, SignupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authentication', authenticationReducer)
  ],
  providers: []
})
export class CoreModule {
}
