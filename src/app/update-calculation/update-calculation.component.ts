import { CalculationService } from '../calculation.service';
import { Calculation } from '../calculation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Popraw import Routera

@Component({
  selector: 'app-update-calculation',
  templateUrl: './update-calculation.component.html',
  styleUrls: ['./update-calculation.component.css']
})
export class UpdateCalculationComponent implements OnInit {

  id: number = 0;
  calculation: Calculation = new Calculation();
  constructor(
    private calculationService: CalculationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.calculationService.getCalculationById(this.id).subscribe(data => {
      this.calculation = data;
    }, error => console.log(error));
  }

  onSubmit() {
    delete this.calculation.result;
  
    this.calculationService.updateCalculation(this.id, this.calculation).subscribe(
      (data) => {
        this.goToCalculationList();
      },
      (error) => console.log(error)
    );
  }
  

  goToCalculationList() {
    this.router.navigate(['/calculations']);
  }
}