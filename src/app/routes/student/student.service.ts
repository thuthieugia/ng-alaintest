import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Student } from './student';

const baseUrl = `https://6206728a92dd6600171c0aad.mockapi.io//studen`;

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Student[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Student>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(params: any, id: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
