import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsComponent } from './components/events/events.component';
import { EventsListComponent } from './components/events.list/events.list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EventsHomeComponent } from './components/events.home/events.home.component';
import { DataService } from './services/data.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EventteamComponent } from './components/eventteam/eventteam.component';
import { EventTeamHomeComponent } from './components/eventteam/eventteamhome/eventteamhome.component';
import { EventteamlistComponent } from './components/eventteam/eventteamlist/eventteamlist.component';
import { SaisieHomeComponent } from './components/saisies/saisie.home/saisie.home.component';
import { SaisieComponent } from './components/saisies/saisie/saisie.component';
import { EventtrackComponent } from './components/eventtrack/eventtrack.component';
import { SaisieHeaderComponent } from './components/saisies/saisie.header/saisie.header.component';
import { EventeamtrackComponent } from './components/saisies/eventeamtrack/eventeamtrack.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    EventsListComponent,
    EventsHomeComponent,
    EventteamComponent,
    EventTeamHomeComponent,
    EventteamlistComponent,
    SaisieHomeComponent,
    SaisieComponent,
    EventtrackComponent,
    SaisieHeaderComponent,
    EventeamtrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    DataService,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
