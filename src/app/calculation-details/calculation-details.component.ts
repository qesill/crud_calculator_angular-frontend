import { Component, OnInit } from '@angular/core';
import { Calculation } from '../calculation';
import { ActivatedRoute } from '@angular/router';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-calculation-details',
  templateUrl: './calculation-details.component.html',
  styleUrls: ['./calculation-details.component.css']
})
export class CalculationDetailsComponent implements OnInit{

  id: number = 0;
  calculation: Calculation = new Calculation();
constructor(private route: ActivatedRoute, private calculationService: CalculationService) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

  this.calculation = new Calculation();
  this.calculationService.getCalculationById(this.id).subscribe( data => {
    this.calculation = data;
  });
}
}
