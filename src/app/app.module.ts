import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EchoService  } from './echo-service.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', redirectTo: '/app', pathMatch: 'full' },
       
       { path: 'app', component: AppComponent }
     ])
  ],
  providers: [EchoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
