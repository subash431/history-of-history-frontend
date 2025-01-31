import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { EventComponent } from '../pages/event/event.component';
import { FigureComponent } from '../pages/figure/figure.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AddEventComponent } from '../pages/add-event/add-event.component';
import { AllEventComponent } from '../pages/all-event/all-event.component';
import { DateComponent } from '../components/date/date.component';
import { EventDetailsComponent } from '../pages/event-details/event-details.component';
import { EditEventComponent } from '../pages/edit-event/edit-event.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'figure',
    component: FigureComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'addEvent',
    component: AddEventComponent,
  },
  {
    path: 'all-event',
    component: AllEventComponent,
  },
  {
    path: 'date',
    component: DateComponent,
  },
  // {
  //   path: 'edit/:id',
  //   component: EditEventComponent,
  // },
  { path: 'edit/:id', component: EditEventComponent },

  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'admin', component: AdminPanelComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];
