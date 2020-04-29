import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
// import { mockUser} from '../mock-users';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {SpecialistService} from '../specialist.service';
import {Specialist} from '../specialist';

@Component({
  selector: 'app-my-specialists',
  templateUrl: './my-specialists.component.html',
  styleUrls: ['./my-specialists.component.css']
})
export class MySpecialistsComponent implements OnInit {
  title = '';
  age = ' ';
  gender = ' ';
  city = ' ';
  category: Category;


  categories: Category[];
  userSpecialists: Specialist[];

  constructor(
    private categoryService: CategoryService,
    private specialistService: SpecialistService) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.loadMySpecialists();
  }

  loadMySpecialists() {
    this.specialistService.findUserSpecialists().subscribe(
      res => this.userSpecialists = res
    );
  }


  getCategories() {
    this.categoryService.getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }

  createSpecialist() {
    this.specialistService.createSpecialist(this.title, this.age, this.gender, this.city , this.category.id, 0 , 'url')
      .subscribe(res => {
          alert('Specialist created successfully');
        }
      );
  }

  delete(specialist: Specialist) {
  }

}
