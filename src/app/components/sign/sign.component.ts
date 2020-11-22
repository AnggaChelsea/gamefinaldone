import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  loading = false;

  loginData = {
    email:'',
    password:''
  }

  constructor(private authService:AuthService, private router:Router) {}
  ngOnInit(): void {
  }
  signinUser(){
    this.loading = true;
    this.authService.signinUser(this.loginData)
    .subscribe(
      res =>{
      console.log(res)
      localStorage.setItem('token', res.access_token)
      res => this.router.navigate([''])
    },
    )
  }

  }
