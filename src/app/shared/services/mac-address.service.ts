import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { UniversalStorage } from '@shared/storage/universal.storage';

export interface MacAddress {
  macAddressDetails: any;
  vendorDetails: any;
  blockDetails: any;
}

@Injectable({
  providedIn: 'root'
})
export class MacAddressService {

  constructor(
    @Inject(UniversalStorage) private _appStorage: Storage,
    private _http: HttpClient
  ) { }

  checkValidAddress({search}): Observable<MacAddress> {
   return this._http.get<MacAddress>(`${environment.macAddress}/v1`, {
       params: new HttpParams().set('apiKey', 'at_BULmXFODqtiqHIVJ6CERtQ11sBwzn')
         .set('output', 'json')
         .set('search', search)
    });
  }

  get macAddresses(): MacAddress[] {
    return JSON.parse(this._appStorage.getItem('MacAddresses'));
  }

  addMacAddress(macAddress) {
    if (!this._appStorage.getItem('MacAddresses')) {
      this._appStorage.setItem('MacAddresses', JSON.stringify([macAddress]));
      return;
    }
    this.macAddresses.push(macAddress);
    this._appStorage.setItem('MacAddresses', JSON.stringify(this.macAddresses));
    return this.macAddresses;
  }
}
