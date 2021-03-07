import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
      RouterModule.forRoot([
        { path: '', component: RegisterComponent },
        { path: 'reactive-form', component: RegisterComponent }
      ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
