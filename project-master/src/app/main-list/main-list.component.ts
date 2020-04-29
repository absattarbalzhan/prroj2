import {Component, OnInit} from '@angular/core';
import {SpecialistService} from "../specialist.service";
import {Specialist} from "../specialist";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  recipes: Specialist[];

  constructor(
    public specialistService: SpecialistService
  ) {
  }

  ngOnInit() {
    this.getSpecialists();
  }

  getSpecialists(): void {
    this.specialistService.getSpecialists()
      .subscribe(recipes => this.recipes = recipes);
  }

}
