import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialistService} from '../specialist.service';
import {Specialist} from '../specialist';
import {Comment} from '../comment';

@Component({
  selector: 'app-specialist-detail',
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.css']
})
export class SpecialistDetailComponent implements OnInit {

  selectedItem: Specialist;
  text = '';
  comments: Comment[];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private specialistService: SpecialistService
  ) {
  }

  ngOnInit(): void {
    this.findSpecialist();
  }

  findSpecialist() {
    let id = this.route.snapshot.paramMap.get('specialistId');
    id = id.substr(1);
    this.specialistService.getSpecialist(id).subscribe(specialist => this.selectedItem = specialist);
    this.specialistService.getSpecialistComments(id).subscribe(
      comments => this.comments = comments
    );
  }

  back(): void {
    this.location.back();
  }

  save() {
    this.specialistService.saveSpecialist(this.selectedItem.id).subscribe(
      res => {
        alert('Specialist saved');
      }
    );
  }

  send(): void {
    this.specialistService.commentSpecialist(this.selectedItem.id, 'comment', this.text).subscribe(
      res => {
        this.text = '';
      }
    );
  }

  delete() {
    this.specialistService.delete(this.selectedItem.id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => console.log(error));
  }

}




