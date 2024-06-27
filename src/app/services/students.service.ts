import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = 'https://apisipi.ddns.net/api/students';
  private token = '';

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken();
  }

  // Obtener todos los estudiantes
  obtenerStudents(): Observable<any[]> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  // Obtener un estudiante por ID
  obtenerStudentPorId(computerId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any>(`${this.apiUrl}/${computerId}`, { headers });
  }

  // Agregar un nueva student
  agregarStudent(student: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.post<any>(`${this.apiUrl}`, student, { headers });
  }

  // Actualizar un student existente por ID
  actualizarStudent(studentId: number, student: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.patch<any>(`${this.apiUrl}/${studentId}`, student, { headers });
  }

  // Eliminar un student por ID
  eliminarStudent(studentId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.delete<any>(`${this.apiUrl}/delete/${studentId}`, { headers });
  }
}
