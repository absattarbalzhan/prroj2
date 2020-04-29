import { Injectable } from '@angular/core';
import {Specialist} from './specialist';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  BASE_URL = 'http://127.0.0.1:8000';
  list: Specialist[];

  constructor(private http: HttpClient) {
    this.chooseList(1);
  }

  getTopTen(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/specialists/top_ten/`);
  }

  getSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/specialists/`);
  }

  getSpecialist(id: string): Observable<Specialist> {
    return this.http.get<Specialist>(`${this.BASE_URL}/api/specialists/${id}/`);
  }

  getSpecialistComments(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/api/specialists/${id}/comments/`);
  }

  commentSpecialist(id: number, title: string, text: string): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}/api/specialists/${id}/comments/`, {
      title,
      text
    });
  }

  saveSpecialist(id: number): Observable<Message> {
    return this.http.put<Message>(`${this.BASE_URL}/api/specialists/${id}/follow/`, null);
  }

  getList(id: number): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/categories/${id}/specialists/`);
  }

  getSavedSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/specialists/followed/`);
  }

  createSpecialist(title: string, age: string, gender: string, city: string, category: number,
                   // tslint:disable-next-line:variable-name
                   likes: number, front_image: string): Observable<Specialist> {
    return this.http.post<Specialist>(`${this.BASE_URL}/api/specialists/`, {
      title,
      age,
      gender,
      city,
      category,
      likes,
      front_image
    });
  }

  findUserSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(`${this.BASE_URL}/api/profile/specialists/`);
  }

  chooseList(id: number): void {
    this.getList(id).subscribe(list => this.list = list);
  }

}
