import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { EventsListComponent } from './components/events.list/events.list.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path : '', redirectTo : 'layout', pathMatch : 'full'},
  { path : 'home', component:LayoutComponent},
  {
    path : 'events/add',
    title: 'Ajout des Events',
    component:EventsComponent
  },
  {
      path : 'events',
      component:EventsListComponent,children:[
        {
            path:'',redirectTo:'events',
            title: 'liste des Events',
            pathMatch:'full'
        },
        {
          path : 'events/:oid',
          title: 'Edition des Events',
          component:EventsListComponent
        },
        {
          path : 'events/delete/:oid',
          title: 'Suppression des Events',
          component:EventsListComponent
        },




      ]
  }
  // { path : 'events', component:EventsListComponent,children:[
  //   {
  //     path:'events',redirectTo:'events',
  //     title: 'liste des Events',
  //     pathMatch:'full'
  //   },
  //   {
  //     path:'events',
  //     title: 'liste des Events',
  //     component:EventsListComponent
  //   },
  //   {
  //     path : '/add',
  //     title: 'Ajout des Events',
  //     component:EventsComponent
  //   },
  // ]

  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
