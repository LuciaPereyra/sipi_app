import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarRequestsService {

  private apiUrl = 'https://apisipi.ddns.net/api/requests';

  private token = '';

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken();
  }


  // Obtener todas las solicitudes
  obtenerSolicitudesCalendario(): Observable<any[]> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}/calendar`, { headers });
  }
}