import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from '../classes/country';

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

  private handleError(error: any): Promise<any> {
    console.log('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}
