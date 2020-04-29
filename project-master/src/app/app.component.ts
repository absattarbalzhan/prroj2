import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token != null) {
      this.userService.logged = true;
    }
  }
}
