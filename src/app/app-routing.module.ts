import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRoutingModule } from './component/componen-routing.module';


const routes: Routes = [
  { path: "", redirectTo:"component", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
