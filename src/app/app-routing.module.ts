import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { EventsListComponent } from './components/events.list/events.list.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path : '', redirectTo : 'layout', pathMatch : 'full'},
  { path : 'home', component:LayoutComponent},
  { path : 'events', component:EventsComponent},
  { path : 'eventslist', component:EventsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
