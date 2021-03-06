import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GithubComponent } from './components/github/github.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { UndelineDirective } from './directives/undeline.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubComponent,
    FooterComponent,
    NotFoundComponent,
    TimeagoPipe,
    UndelineDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
