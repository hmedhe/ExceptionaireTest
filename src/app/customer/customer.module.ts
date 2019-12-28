import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import{MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [CustomerListComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  entryComponents:[CustomerAddComponent]
})
export class CustomerModule { }
