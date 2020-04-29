import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {UserService} from '../user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private categoryService: CategoryService,
    private userService: UserService,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  logIn() {
    this.userService.login(this.username, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.username = '';
        this.password = '';
        this.userService.logged = true;
        this.location.back();
      });
  }

}
