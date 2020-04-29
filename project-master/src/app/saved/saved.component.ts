import { Component, OnInit } from '@angular/core';
import {Specialist} from '../specialist';
import {SpecialistService} from '../specialist.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  savedSpecialists: Specialist[];

  constructor(
    private specialistService: SpecialistService
  ) {
  }

  ngOnInit() {
    this.getSavedSpecialists();
  }

  getSavedSpecialists() {
    this.specialistService.getSavedSpecialists()
      .subscribe(specialists => this.savedSpecialists = specialists);
  }

  remove(specialist: Specialist): void {
  }

}
