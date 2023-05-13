import {Component, OnInit} from '@angular/core';
import * as Chart from 'chart.js';
import {Router} from "@angular/router";
import {PanelService} from "../panel.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  chart: any;
  days: number
  constructor(private router: Router,
              private panelService: PanelService) {
    this.days = this.panelService.nextPicture
  }
  ngOnInit() {
    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Tydzień 1', 'Tydzień 2', 'Tydzień 3', 'Tydzień 4', 'Tydzień 5', 'Tydzień 6', 'Tydzień 7','Tydzień 8'],
        datasets: [{
          label: 'Procent płytki paznokcia niezajętej przez infekcję grzybiczą',
          data: [70, 72, 75, 74, 77, 79, 81,82],
          borderColor: '#3cba9f',
          fill: false
        }]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Tygodnie'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '%'
            },
            ticks: {
              beginAtZero: false
            }
          }],
        }
      }
    });
  }

  takePhoto(){
    this.router.navigate(["picture"])
  }

  onConfirm(){
    alert("Częstotliwość wykonywania zdjęć została zmieniona.")
  }

  onRaportDownload(): void {
    const confirmed = confirm('Czy na pewno chcesz pobrać raport?');
    if (confirmed) {
      const fileUrl = './assets/raport.pdf';
      const fileName = 'raport.pdf';

      const anchor = document.createElement('a');
      anchor.href = fileUrl;
      anchor.download = fileName;
      anchor.target = '_blank';
      anchor.click();
    }
  }

}
