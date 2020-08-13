import { RouterModule, Routes } from '@angular/router';
import { MacAddressCheckComponent } from './mac-address-check/mac-address-check.component';
import { MacAddressListComponent } from './mac-address-list/mac-address-list.component';
import {MacAddressComponent} from './mac-address.component';

const routes: Routes = [
  { path: '',
    component: MacAddressComponent,
    children: [
      {
        path: 'check',
        component: MacAddressCheckComponent
      },
      {
        path: 'list',
        component: MacAddressListComponent
      }
    ]
  },
];

export const MacAddressRoutes = RouterModule.forChild(routes);
