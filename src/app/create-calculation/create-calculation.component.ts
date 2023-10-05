import { Component } from '@angular/core';
import { Calculation } from '../calculation';
import { CalculationService } from '../calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-calculation',
  templateUrl: './create-calculation.component.html',
  styleUrls: ['./create-calculation.component.css']
})
export class CreateCalculationComponent{

  calculation: Calculation = new Calculation();
  constructor (private calculationService: CalculationService,
    private router: Router) {

  }  
  
saveCalculation(){
  this.calculationService.createCalculation(this.calculation).subscribe(data =>{
    console.log(data);
    this.goToCalculationList();
  },
  error => console.log(error));    
}

goToCalculationList(){
  this.router.navigate(['/calculations']);

}
  onSubmit() {
    console.log(this.calculation);
    this.saveCalculation();

  }

}
