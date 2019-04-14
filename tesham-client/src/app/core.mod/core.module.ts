// Angular
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// App
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { reducers } from './store/index-store';
import { HandleErrorComponent } from './handle-error/handle-error.component';
import { HandleErrorService } from './handle-error/handle-error.service';


@NgModule({
  declarations:
    [LoginComponent, SignupComponent, HandleErrorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authentication', reducers),
  ],
  exports: [HandleErrorComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {
      provide: ErrorHandler,
      useClass: HandleErrorService
    }
    ]
})
export class CoreModule {
}
