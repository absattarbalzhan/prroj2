import { Component, OnInit } from '@angular/core';
import {SpecialistService} from '../specialist.service';
import {Specialist} from '../specialist';

@Component({
  selector: 'app-top-specialists',
  templateUrl: './top-specialists.component.html',
  styleUrls: ['./top-specialists.component.css']
})
export class TopSpecialistsComponent implements OnInit {
  specialists: Specialist[];

  constructor(private specialistService: SpecialistService) { }

  ngOnInit(): void {
    this.specialistService.getTopTen().subscribe(
      specialists => this.specialists = specialists
    );
  }
}
