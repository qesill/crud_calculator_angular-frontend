import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationListComponent } from './calculation-list/calculation-list.component';
import { CreateCalculationComponent } from './create-calculation/create-calculation.component';
import { UpdateCalculationComponent } from './update-calculation/update-calculation.component';
import { CalculationDetailsComponent } from './calculation-details/calculation-details.component';

const routes: Routes = [
  {path: 'calculations', component: CalculationListComponent},
  {path: 'create-calculation', component: CreateCalculationComponent},
  {path: '', redirectTo: 'calculations', pathMatch: 'full'},
  {path: 'update-calculation/:id', component: UpdateCalculationComponent},
  {path: 'calculation-details/:id', component: CalculationDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
