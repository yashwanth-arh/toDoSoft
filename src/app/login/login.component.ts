import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.validateForm();
  }

  private validateForm() {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginProcess() {
    this.route.navigate(['todo-main']);
  }
}
