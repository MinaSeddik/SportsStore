import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [],
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.css'
})
export class ChartjsComponent implements OnInit {

  title = 'ng-chart';
  chart: any = [];

  constructor() {
  }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animation: false,
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          }
        }
      },
    });
  }
}
