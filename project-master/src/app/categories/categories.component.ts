import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {SpecialistService} from "../specialist.service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(
    private specialistService: SpecialistService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  function(id: number) {
    this.specialistService.chooseList(id);
  }

}
