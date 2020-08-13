import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMacAddress, MacAddressService } from 'src/app/shared/services/mac-address.service';

@Component({
  selector: 'app-mac-address-check',
  templateUrl: './mac-address-check.component.html',
})
export class MacAddressCheckComponent implements OnInit, OnDestroy {

  macRequestSubscription: Subscription;

  form =  new FormGroup({
    // MAC-address
    search: new FormControl('', [Validators.required])
  });

  constructor(
    private  _macAddress: MacAddressService,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.macRequestSubscription?.unsubscribe();
  }

  handleSubmit() {
    this.macRequestSubscription = this._macAddress.checkValidAddress(this.form.value).pipe(
      tap((response: IMacAddress) => {
        this._macAddress.addMacAddress(response);
      })
    ).subscribe();
  }
}
