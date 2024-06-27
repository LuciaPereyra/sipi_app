import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  private apiUrl = 'https://apisipi.ddns.net/api/computers';

  private token = '';

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken();
  }


  // Obtener todas las computadoras
  obtenerComputadoras(): Observable<any[]> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  // Obtener una computadora por ID
  obtenerComputadoraPorId(computerId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any>(`${this.apiUrl}/${computerId}`, { headers });
  }

  // Agregar una nueva computadora
  agregarComputadora(computadora: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.post<any>(`${this.apiUrl}`, computadora, { headers });
  }

  // Actualizar una computadora existente por ID
  actualizarComputadora(computerId: number, computadora: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.patch<any>(`${this.apiUrl}/${computerId}`, computadora, { headers });
  }

  // Eliminar una computadora por ID
  eliminarComputadora(computerId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.delete<any>(`${this.apiUrl}/delete/${computerId}`, { headers });
  }

  computadorasDisponibles(): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any>(`${this.apiUrl}/available`, { headers });
  }

  computadorasNoDisponibles(): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any>(`${this.apiUrl}/notavailable`, { headers })
  }

  solicitudComputadora(request: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.post<any>(`${this.apiUrl}/requests`, request, { headers });
  }

  retornarComputadora(returnId: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.patch<any>(`${this.apiUrl}/return`, returnId, { headers });
  }

}
