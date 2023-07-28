import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { EventsListComponent } from './components/events.list/events.list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EventsHomeComponent } from './components/events.home/events.home.component';
import { EventteamlistComponent } from './components/eventteam/eventteamlist/eventteamlist.component';
import { SaisieHomeComponent } from './components/saisies/saisie.home/saisie.home.component';
import { SaisieComponent } from './components/saisies/saisie/saisie.component';

const routes: Routes = [
  { path : '', redirectTo : 'layout', pathMatch : 'full'},
  { path : 'home', component:LayoutComponent},
  
  {
      path : '',
      component:EventsHomeComponent,children:[
        {
            path:'',redirectTo:'events',
            title: 'liste des Events',
            pathMatch:'full'
        },
        {
          path : 'events',
          title: 'liste des Events',
          component:EventsListComponent
        },
        
        {
          path : 'events/delete/:oid',
          title: 'Suppression des Events',
          component:EventsListComponent
        },
        {
          path : 'events/add',
          title: 'Ajout des Events',
          component:EventsComponent
        },
        {
          path : 'events/:oid',
          title: 'Mise à jour',
          component:EventsComponent
        },



      ]
  },
  {
      path : '',
      component:EventsHomeComponent,children:[
        {
          path:'',redirectTo:'eventteams',
          title: 'liste des EventTeams',
          pathMatch:'full'
        },
        {
          path : 'eventteams',
          title: 'liste des EventTeams',
          component:EventteamlistComponent
        },
        
      ]
  },
  {
      path : '',
      component:SaisieHomeComponent,children:[
        {
          path:'',redirectTo:'saisie',
          title: 'écran de saisie des parcours',
          pathMatch:'full'
        },
        {
          path : 'saisie',
          title: 'écran de saisie des parcours',
          component:SaisieComponent
        },
        
      ]
  },
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
