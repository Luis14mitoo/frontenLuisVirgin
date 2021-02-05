import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './components/inicio/inicio.component';



const routes: Routes = [
  {path: 'home', component:InicioComponent  },
  {path: '**', pathMatch: 'full', redirectTo:'home'},
  //{path: 'pipe', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
