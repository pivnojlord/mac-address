import { Component, Inject, OnInit } from '@angular/core';
import { MacAddressService } from 'src/app/shared/services/mac-address.service';

@Component({
  selector: 'app-mac-address-list',
  templateUrl: './mac-address-list.component.html',
})
export class MacAddressListComponent implements OnInit {

  constructor(public _macAddress: MacAddressService) { }

  ngOnInit(): void {
  }

}
