import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from './classes/country';

@Component({
  selector: 'country-detail',
  templateUrl: './templates/country-detail.component.html',
  styleUrls: ['./css/country-detail.component.css']
})

export class CountryDetail {
  @Input() inputCountry: Country;

  constructor (
    private router: Router
  ) { }

  gotoDetail(): void {
    this.router.navigate(['/details', this.inputCountry.alpha3Code]);
  }
}
