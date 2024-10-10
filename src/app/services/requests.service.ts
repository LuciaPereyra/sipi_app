import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private apiUrl = 'https://api-sipi.ddns.net/api/requests';

  constructor(private http: HttpClient, private userService: UserService) { }

  // Obtener todas las solicitudes
  obtenerSolicitudes(): Observable<any[]> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }
  // Agregar una nueva solicitud
  agregarSolicitudProfessor(request: any): Observable<any> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<any>(`${this.apiUrl}`, request, { headers });
  }
  // Revisar una solicitud
  revisarSolicitud(request_id: any, status: any): Observable<any> {
    const token = this.userService.getToken();
    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.patch<any>(`${this.apiUrl}/review/${request_id}`, status, { headers });
  }


  // Actualizar un usuario existente por ID
  actualizarSolicitud(request_id: any, data: any): Observable<any> {
    console.log('request_id:', request_id)
    console.log('data:', data)

    const token = this.userService.getToken();

    let headers = new HttpHeaders()
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post<any>(`${this.apiUrl}/edit/${request_id}`, data, { headers });
  }
}

