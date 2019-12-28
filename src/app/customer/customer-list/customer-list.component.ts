import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
modalRef:BsModalRef
CustomerData:any=[]
  constructor(private bsModuleService:BsModalService,private router: Router) { }

  ngOnInit() {
this.CustomerData = JSON.parse( localStorage.getItem('CutomerData'))
console.log(this.CustomerData)
  }

  AddCustomer(){
    const initialState = {

      title: 'Create ',
      class: 'modal-lg modal-dialog-centered',
      animated: true,
      keyboard: true,
      ignoreBackdropClick: true
    };

    this.modalRef = this.bsModuleService.show(CustomerAddComponent, initialState);
    this.bsModuleService.onHide.subscribe((reason: string) => {
      // console.log("modal close: " + reason);

      this.ngOnInit();

    })
  }
  EditCustomer(data){
console.log(data)

const initialState = {
  data:data,
  title: 'Create ',
  class: 'modal-lg modal-dialog-centered',
  animated: true,
  keyboard: true,
  ignoreBackdropClick: true
};

this.modalRef = this.bsModuleService.show(CustomerAddComponent, initialState);
this.bsModuleService.onHide.subscribe((reason: string) => {
  // console.log("modal close: " + reason);

  this.ngOnInit();

})
  }
  Logout(){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.router.navigate([''])
        Swal.fire(
     
          'Logout Successfully.',
          
        )
      } 

      localStorage.removeItem('CutomerData')
    })

    
  }
}
