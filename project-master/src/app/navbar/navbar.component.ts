import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {UserService} from '../user.service';
import {Specialist} from '../specialist';
import {SpecialistService} from '../specialist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged;

  constructor(
    private categoryService: CategoryService,
    private userService: UserService,
    private specialistService: SpecialistService
  ) {
  }

  specialists: Specialist[];
  name: string;

  ngOnInit(): void {
    this.name = '';
  }

  search() {
    this.specialistService.search(this.name)
      .subscribe(specialists => this.specialists = specialists);
  }

}
