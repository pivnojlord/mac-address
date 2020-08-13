import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mac-address/mac-address.module').then((m) => m.MACAddressModule)
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
