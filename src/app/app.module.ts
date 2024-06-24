import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardAdminComponent } from './components/pages/dashboard-admin/dashboard-admin.component';
import { TableComponent } from './components/pages/datatable/table.component';
import { CardComponent } from './components/commons/cardComponent/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DashboardProfComponent } from './components/pages/dashboard-prof/dashboard-prof.component';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './components/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { AuthInterceptor } from './auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTemplateComponent } from './components/commons/dialog-template/dialog-template.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './components/commons/custom-snackbar/custom-snackbar.component';
import { MatSelectModule } from '@angular/material/select';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './components/pages/calendar/calendar.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableCalendarComponent } from './components/pages/table-calendar/table-calendar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardProfComponent,
    TableComponent,
    CardComponent,
    FooterComponent,
    DialogTemplateComponent,
    ReactiveFormComponent,
    CustomSnackbarComponent,
    CalendarComponent,
    TableCalendarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
