import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationListComponent } from './calculation-list/calculation-list.component';
import { CreateCalculationComponent } from './create-calculation/create-calculation.component';
import { FormsModule } from '@angular/forms';
import { UpdateCalculationComponent } from './update-calculation/update-calculation.component';
import { CalculationDetailsComponent } from './calculation-details/calculation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationListComponent,
    CreateCalculationComponent,
    UpdateCalculationComponent,
    CalculationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
