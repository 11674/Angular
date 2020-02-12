import { Component, OnInit } from '@angular/core';
import { ChartType, ChartPoint} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  // Doughnut
   public doughnutChartLabels: Label[] = ['Ventas', 'Perdidas', 'Total'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100],
     [50, 150, 120],
     [250, 130, 70],
   ];
   public doughnutChartType: ChartType = 'doughnut';

   constructor() { }

   ngOnInit() {
   }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }

   public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
     console.log(event, active);
   }
   // public numeros_random(): ChartPoint[]{
   //   return;
   // }

}
