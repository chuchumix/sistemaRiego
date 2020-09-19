import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from '../../services/temperatura.service';
import * as $ from 'jquery';
//declare var $ : any;

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  datos: any[] = [];
  constructor( private _temperaturaService:TemperaturaService) {
    this._temperaturaService.getDatos()
      .subscribe( (dataMarcas: any) => {
        this.datos = dataMarcas;
      });
   }

  ngOnInit(): void {
    $('#buscar').click(function(){
      let de = $("#Date1").val();
      let a = $("#segunda").val();
      console.log(de + " a: " + a);

    });
    
  }

}
