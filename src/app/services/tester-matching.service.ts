import {Injectable} from '@angular/core';
import {SelectElement} from "../models/selectElement";
import {TesterExperience} from "../models/testerExperience";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../models/device";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TesterMatchingService {

  constructor(private http: HttpClient) {
  }

  getDevices = (): Observable<SelectElement<number>[]> => this.http.get<Device[]>('/api/device').pipe(map((devices)=> devices.map((device)=>new SelectElement<number>(device.deviceId, device.description))));

  getCountries = (): Observable<SelectElement<string>[]> => this.http.get<string[]>('/api/testers/countryList').pipe(map((countries)=> countries.map(country=>new SelectElement<string>(country,country))));

  getTestersWithExperience = (countries: string[], devices: number[]): Observable<TesterExperience[]> =>
    this.http.post<TesterExperience[]>('/api/testers/experience', {countries: countries, deviceIds: devices});


}
