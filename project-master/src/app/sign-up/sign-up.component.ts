import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username = '';
  email = '';
  password = '';

  constructor(
    private userService: UserService,
    private route: Router
  ) {
  }

  ngOnInit() {
  }

  signUp() {
    this.userService.signUp(this.username, this.email, this.password)
      .subscribe(res => {
        this.userService.login(this.username, this.password)
          .subscribe(res1 => {
            localStorage.setItem('token', res1.token);
            this.username = '';
            this.password = '';
            this.userService.logged = true;
            this.route.navigate(['/main']);
          });
      });

  }
}
