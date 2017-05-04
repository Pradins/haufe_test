import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from '../classes/country';
import { CountryDetail } from '../classes/country-detail';

@Injectable()
export class CountryService {

  constructor(private http: Http) {}

  private baseApiUrl = 'http://localhost:3000/api/';

  getAllCountries(): Promise<Country[]> {
    return this.http.get(this.baseApiUrl + 'all')
      .toPromise()
      .then(response => response.json() as Country[])
      .catch(this.handleError);
  }

  // getAllCountries_flat(): Promise<any> {
  //   return this.http.get(this.baseApiUrl + 'all')
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(this.handleError);
  // }

  getCountryDetail(code: String): Promise<CountryDetail> {
    return this.http.get(this.baseApiUrl + 'country/' + code)
      .toPromise()
      .then(response => response.json() as CountryDetail)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error ocurred', error);
    return null;
  }
}
