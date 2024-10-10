import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost/api/users';
  private token = '';

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken();
  }

  // Obtener todos los usuarios
  obtenerUsers(): Observable<any[]> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  // Obtener un usuario por ID
  obtenerUserPorId(userId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return this.http.get<any>(`${this.apiUrl}/${userId}`, { headers });
  }

  // Agregar un nuevo usuario
  agregarUser(user: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return this.http.post<any>(`${this.apiUrl}`, user, { headers });
  }

  // Actualizar un usuario existente por ID
  actualizarUser(userId: number, user: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return this.http.patch<any>(`${this.apiUrl}/${userId}`, user, { headers });
  }

  // Eliminar un usuario por ID
  eliminarUser(userId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }

    return this.http.delete<any>(`${this.apiUrl}/delete/${userId}`, { headers });
  }
}
