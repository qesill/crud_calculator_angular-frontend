import { Component, OnInit } from '@angular/core';
import { Calculation } from '../calculation';
import { CalculationService } from '../calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculation-list',
  templateUrl: './calculation-list.component.html',
  styleUrls: ['./calculation-list.component.css']
})
export class CalculationListComponent implements OnInit {

  calculations: Calculation[] = [];
  calculation: Calculation = { id: 0, equation: '', result: 0.0};

  constructor(private calculationService: CalculationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCalculations();
  }

  private getCalculations(){
    console.log('Getting calculations...');
    this.calculationService.getCalculationsList().subscribe(data => {
      console.log('Received data from server:', data);
      this.calculations = data;
      console.log('Assigned calculations:', this.calculations);
    });
  }
  
  calculationDetails(id: number){
    this.router.navigate(['calculation-details', id]);  
  }
  updateCalculation(id: number){
    
this.router.navigate(['update-calculation', id]);
  }

  deleteCalculation(id: number){
    this.calculationService.deleteCalculation(id).subscribe( data =>{
      console.log(data);
      this.getCalculations();
    })
      }
}
