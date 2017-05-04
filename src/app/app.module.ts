import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//services
import { CountryService } from './services/country.service';

//components
import { CountryList } from './country-list.component';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  declarations: [
    CountryList,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CountryService],
  bootstrap: [CountryList]
})
export class AppModule { }
