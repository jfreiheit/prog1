import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InhalteComponent} from './inhalte/inhalte.component';
import {UebungenComponent} from './uebungen/uebungen.component';
import {AufgabenComponent} from './aufgaben/aufgaben.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  { path: 'inhalte', component: InhalteComponent, data: {title: 'Inhalte'}},
  { path: '', redirectTo: '/inhalte', pathMatch: 'full'},
  { path: 'uebungen', component: UebungenComponent, data: {title: 'Übungen'}},
  { path: 'aufgaben', component: AufgabenComponent, data: {title: 'Aufgaben'}},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
