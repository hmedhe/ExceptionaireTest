import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserId: any
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(data) {
    if (data == 'hmedhe') {
      Swal.fire('login successfull !',
       
        'success')
      this.router.navigate(['customer'])
    } else {
      Swal.fire('Enter Valid Username',
        'error')
    }

  }
}
