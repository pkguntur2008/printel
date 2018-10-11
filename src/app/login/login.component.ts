import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:User = new User();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      userpwd: ['', Validators.required]
    });

  }

  onSubmit() {
   
    if (this.loginForm.invalid) {
      return;
    }
    this.user.username = this.loginForm.controls.username.value;
    this.user.password = this.loginForm.controls.userpwd.value;
 
    if(this.user.username == 'airbus' && this.user.password == 'airbus') {
        this.router.navigate(['/home']);
    }
    }
  
}
