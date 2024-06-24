import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarRequestsService {

  private apiUrl = 'https://apisipi.ddns.net/api/requests';

  constructor(private http: HttpClient, private userService: UserService) { }


  // Obtener todas las solicitudes
  obtenerSolicitudesCalendario(): Observable<any[]> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}/calendar`, { headers });
  }
}