import {Component, OnInit, Input} from '@angular/core';
// import {mockUser} from '../mock-users';
import {CategoryService} from '../category.service';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {
  name = '';
  lastname = '';
  email = '';

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(
      res => {
        this.name = res.username;
        this.lastname = res.last_name;
        this.email = res.email;
      }
    );
  }

  logOut() {
    localStorage.clear();
    this.userService.logged = false;
  }

  save() {
    this.userService.updateUser(this.name, this.lastname, this.email)
      .subscribe(res => {
        alert('Profile updated successfully!');
      });
  }


}
