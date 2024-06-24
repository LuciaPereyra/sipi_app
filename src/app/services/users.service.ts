import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://apisipi.ddns.net/api/users';

  constructor(private http: HttpClient, private userService: UserService) { }

  // Obtener todos los usuarios
  obtenerUsers(): Observable<any[]> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  // Obtener un usuario por ID
  obtenerUserPorId(userId: number): Observable<any> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get<any>(`${this.apiUrl}/${userId}`, { headers });
  }

  // Agregar un nuevo usuario
  agregarUser(user: any): Observable<any> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post<any>(`${this.apiUrl}`, user, { headers });
  }

  // Actualizar un usuario existente por ID
  actualizarUser(userId: number, user: any): Observable<any> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.patch<any>(`${this.apiUrl}/${userId}`, user, { headers });
  }

  // Eliminar un usuario por ID
  eliminarUser(userId: number): Observable<any> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.delete<any>(`${this.apiUrl}/delete/${userId}`, { headers });
  }
}
