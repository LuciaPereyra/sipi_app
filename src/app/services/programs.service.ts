import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private apiUrl = 'https://api-sipi.ddns.net/api/programs';

  private token = '';

  constructor(private http: HttpClient, private userService: UserService) {
    this.token = this.userService.getToken();
  }


  // Obtener todos los programas
  obtenerPrograms(): Observable<any[]> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  // Obtener una program por ID
  obtenerProgramPorId(programId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.get<any>(`${this.apiUrl}/${programId}`, { headers });
  }

  // Agregar un nuevo program
  agregarProgram(program: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.post<any>(`${this.apiUrl}`, program, { headers });
  }

  // Actualizar un program existente por ID
  actualizarProgram(programId: number, program: any): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.patch<any>(`${this.apiUrl}/${programId}`, program, { headers });
  }

  // Eliminar una Program por ID
  eliminarProgram(programId: number): Observable<any> {
    let headers = new HttpHeaders()
    if (this.token) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
    }
    return this.http.delete<any>(`${this.apiUrl}/delete/${programId}`, { headers });
  }
}
