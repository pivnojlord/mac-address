import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacAddressRoutes } from './mac-address.routing';
import { MacAddressCheckComponent } from './mac-address-check/mac-address-check.component';
import { MacAddressListComponent } from './mac-address-list/mac-address-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MacAddressComponent } from './mac-address.component';


@NgModule({
  declarations: [MacAddressCheckComponent, MacAddressListComponent, MacAddressComponent],
  imports: [
    CommonModule,
    MacAddressRoutes,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
})
export class MACAddressModule { }
