import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged;

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.logged = this.userService.logged;
  }

}
