import { Country } from './country';

export class CountryDetail extends Country {
  description: String;
  topLevelDomain: String;
  altSpellings: [String];
  region: String;
  borders: [String];
  currencies: [String]
}
