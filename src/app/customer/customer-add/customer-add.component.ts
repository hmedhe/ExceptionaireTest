import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  Customer:any={};
  imageUrl : string ="../../../assets/picture.jpg"
 
  CustomerData:any=[];
  EditCustomerData:any={};
  Flag:boolean
  constructor(private bsModelService:BsModalService,private ModalRef:BsModalRef) { 

    this.EditCustomerData = this.bsModelService.config['data'] != undefined ? this.bsModelService.config['data' ] : undefined
    console.log(this.EditCustomerData)
    if(this.EditCustomerData != undefined){
      this.Customer = this.EditCustomerData
    }else{
      this.Customer.Photo = this.imageUrl
    }
  }

  ngOnInit() {
    if(localStorage.getItem('CutomerData') != null){
    this.CustomerData = JSON.parse( localStorage.getItem('CutomerData'))
    console.log(this.CustomerData)
    
  }
 

    
  }
  handleFileInput(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
  }
  reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
 
}
_handleReaderLoaded(e) {
  let reader = e.target;
  this.Customer.Photo = reader.result;
  console.log(this.imageUrl)
}

OnSaveCustomer(data){

console.log(data)

  for(let i =0;i<this.CustomerData.length;i++){
 
    if(data.ID === this.CustomerData[i].ID){
  this.Flag = true
   
      // this.CustomerData[i].ID = data.ID
      this.CustomerData[i].Photo =data.Photo
      this.CustomerData[i].FirstName =data.FirstName
      this.CustomerData[i].MobileNumber =data.MobileNumber
      this.CustomerData[i].Email =data.Email
      this.CustomerData[i].Male =data.Male
      this.CustomerData[i].Female =data.Female
      this.CustomerData[i].Member =data.Member
      this.CustomerData[i].Pan =data.Pan

      console.log(this.CustomerData[i])
    }else{
      this.Flag = false
    }
  }




if(this.Flag !=true){
  data.ID=this.CustomerData.length+1
  this.CustomerData.push(data)
}

console.log(this.CustomerData)
localStorage.setItem('CutomerData' ,JSON.stringify(this.CustomerData))
this.ModalRef.hide()
}
Cancel(){
this.ModalRef.hide()
}
}
