import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Import standalone components directly into the imports array
import { AppComponent } from './app.component'; 
import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AppComponent,       // Import standalone AppComponent
    LoginComponent,      // Import standalone LoginComponent
    SignupComponent,     // Import standalone SignupComponent
    NavbarComponent,
    HttpClientModule,      // Import standalone NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the standalone AppComponent
})
export class AppModule {}
