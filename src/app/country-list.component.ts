import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { CountryDetailComponent } from './country-detail.component';

import { Country } from './classes/country';

@Component({
  selector: 'app-root',
  templateUrl: './templates/country-list.component.html',
  styleUrls: ['./css/country-list.component.css']
})

export class CountryList implements OnInit {
  title = 'Countries List';
  countryFilter = '';
  countriesList: Country[];
  filteredItems: Country[];
  selectedCountry: Country;

  constructor(
    private countryService: CountryService
  ) {}

  getAllCountries(): void {
    this.countryService.getAllCountries().then(countries => {
      this.countriesList = countries;
      this.assignCopy();
    });
  }

  // getAllCountries_flat(): void {
  //   this.countryService.getAllCountries_flat().then(countries => {
  //     console.log('que es el que rebo dels countries flat: ', countries);
  //   });
  // }

  assignCopy(): void {
    this.filteredItems = Object.assign([], this.countriesList);
  }

  filterItem(value): void {
     if(!value) this.assignCopy();
     this.filteredItems = Object.assign([], this.countriesList).filter(
        item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
     )
  }

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }

  ngOnInit(): void {
    this.getAllCountries();
    // this.getAllCountries_flat();
  }
}
