import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//services
import { CountryService } from './services/country.service';

//components
import { AppComponent } from './app.component';
import { CountryList } from './country-list.component';
import { CountryDetail } from './country-detail.component';
import { CountryDetailView } from './country-detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryList,
    CountryDetail,
    CountryDetailView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CountryList
      },
      {
        path: 'details/:code',
        component: CountryDetailView
      },
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
