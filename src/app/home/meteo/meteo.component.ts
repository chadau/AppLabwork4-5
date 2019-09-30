import { MeteoService } from './../../services/meteo.service';
import { Component, OnInit } from '@angular/core';
import { Meteo } from 'src/app/models/meteo';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss'],
})
export class MeteoComponent implements OnInit {

  private meteo: Meteo;

  constructor(private meteoService: MeteoService) { }

  ngOnInit() {
    this.meteoService.getMeteo('helsinki', 'fi').subscribe(
      data => {
        this.meteo = data;
        console.log('data', this.meteo);
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
