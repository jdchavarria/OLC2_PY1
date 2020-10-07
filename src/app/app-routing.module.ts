import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TablaSimbolComponent} from './components/tabla-simbol/tabla-simbol.component';
import {ErrorComponent} from './components/error/error.component';


const routes:Routes = [
  {
    path: '',
    redirectTo: '/ejecutar',
    pathMatch: 'full'
  },
  {
    path: 'simbolos',
    component: TablaSimbolComponent
  },
  {
    path: 'ejecutar',
    component: HomeComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
