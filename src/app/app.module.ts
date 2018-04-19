import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { BoardComponent } from './board/board.component';
import { DonationsComponent } from './donations/donations.component';
import { NewsComponent } from './news/news.component';
import { PartnersComponent } from './partners/partners.component';
import { ProgramsComponent } from './programs/programs.component';
import { StatesideComponent } from './stateside/stateside.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'board', component: BoardComponent},
  { path: 'donations', component: DonationsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'programs', component: ProgramsComponent},
  { path: 'stateside', component: StatesideComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent,
    BoardComponent,
    DonationsComponent,
    NewsComponent,
    PartnersComponent,
    ProgramsComponent,
    StatesideComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
