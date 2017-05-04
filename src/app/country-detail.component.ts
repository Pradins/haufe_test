import { Component, Input, OnInit } from '@angular/core';

import { Country } from './classes/country';

@Component({
  selector: 'country-detail',
  templateUrl: './templates/country-detail.component.html',
  styleUrls: ['./css/country-detail.component.css']
})

export class CountryDetailComponent {
  @Input() inputCountry: Country;
  title = 'test';

  ngOnInit() {
    
  }
}
