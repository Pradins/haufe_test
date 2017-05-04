import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { CountryService } from './services/country.service';
import { CountryDetail } from './classes/country-detail';

@Component({
  selector: 'app-root',
  templateUrl: './templates/country-detail-view.component.html',
  styleUrls: ['./css/country-detail-view.component.css']
})

export class CountryDetailView implements OnInit{

  countryDetail: CountryDetail;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryService.getCountryDetail(params['code'])
      .then(countryDetail => {
        if (countryDetail == null) { //country not found
          this.router.navigate(['/']);
        } else {
            this.countryDetail = countryDetail
        }
      })
    });
  }

  goBack(): void {
    this.location.back();
  }
}
