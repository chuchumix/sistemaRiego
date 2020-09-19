import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from '../../services/temperatura.service';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {
  datos: any[] = [];
  constructor( private _temperaturaService:TemperaturaService) {
  }

  ngOnInit(): void {
    
    $("#date1").attr('readonly', true);
    $("#time1").attr('readonly', true);
    $("#date2").attr('readonly', true);
    $("#time2").attr('readonly', true); 
    $("#tablaPromedio").css('display', 'none');

    $("#valor").change(function(){
      let sel = $("#valor").val();
      if( sel === "ultimos"){
        $("#date1").attr('readonly', true);
        $("#time1").attr('readonly', true);
        $("#date2").attr('readonly', true);
        $("#time2").attr('readonly', true);
      }
      if( (sel === "fechas") || (sel === "maximo") || (sel === "minimo") || (sel === "promedio")){
        $("#date1").attr('readonly', false);
        $("#time1").attr('readonly', true);
        $("#date2").attr('readonly', false);
        $("#time2").attr('readonly', true);
      }
      if( sel === "tiempo"){
        $("#date1").attr('readonly', false);
        $("#time1").attr('readonly', false);
        $("#date2").attr('readonly', true);
        $("#time2").attr('readonly', false);
      }
    });
    
  } 
  

  obtener():void{
    let date1 = $("#date1").val();
    let time1 = $("#time1").val();
    let date2 = $("#date2").val();
    let time2 = $("#time2").val();
    let sel = $("#valor").val();
  
    if(sel === "ultimos"){
      $("#tablaPromedio").css('display', 'none');
      $("#tablaDatos").css('display', 'block');
      this._temperaturaService.getUltimos()
      .subscribe( (dataHumedad: any) => {
        this.datos = dataHumedad;
      });
    }
    if(sel === "fechas"){
      $("#tablaPromedio").css('display', 'none');
      $("#tablaDatos").css('display', 'block');
      if( (date1 === "") || (date2 === "")){
        alert("- ¡Datos incompletos! Una o varias fechas están vacías.")
      } else if(Date.parse(date1) > Date.parse(date2)){
        alert("- La segunda fecha no puede ser menor a la primera.")
      } else{
        this._temperaturaService.getFechas(date1, date2)
        .subscribe( (dataHumedad: any) => {
          this.datos = dataHumedad;
        });
      }
    }
    if(sel === "maximo"){
      $("#tablaPromedio").css('display', 'none');
      $("#tablaDatos").css('display', 'block');
      if( (date1 === "") || (date2 === "")){
        alert("- ¡Datos incompletos! Una o varias fechas están vacías.")
      } else if(Date.parse(date1) > Date.parse(date2)){
        alert("- La segunda fecha no puede ser menor a la primera.")
      } else{
        this._temperaturaService.getMax(date1, date2)
        .subscribe( (dataHumedad: any) => {
          this.datos = dataHumedad;
        });
      }
    }
    if(sel === "minimo"){
      $("#tablaPromedio").css('display', 'none');
      $("#tablaDatos").css('display', 'block');
      if( (date1 === "") || (date2 === "")){
        alert("- ¡Datos incompletos! Una o varias fechas están vacías.")
      } else if(Date.parse(date1) > Date.parse(date2)){
        alert("- La segunda fecha no puede ser menor a la primera.")
      } else{
        this._temperaturaService.getMin(date1, date2)
        .subscribe( (dataHumedad: any) => {
          this.datos = dataHumedad;
        });
      }
    }
    if(sel === "promedio"){
      $("#tablaPromedio").css('display', 'block');
      $("#tablaDatos").css('display', 'none');
      if( (date1 === "") || (date2 === "")){
        alert("- ¡Datos incompletos! Una o varias fechas están vacías.")
      } else if(Date.parse(date1) > Date.parse(date2)){
        alert("- La segunda fecha no puede ser menor a la primera.")
      } else{
        this._temperaturaService.getProm(date1, date2)
        .subscribe( (dataHumedad: any) => {
          this.datos = dataHumedad;
        });
      }
    }
    if(sel === "tiempo"){
      $("#tablaPromedio").css('display', 'none');
      $("#tablaDatos").css('display', 'block');
      if( (date1 === "") || (time1 === "") || (time2 === "")){
        alert("- ¡Datos incompletos! Una o varias fechas están vacías.")
      } else if(Date.parse(date1) > Date.parse(date2)){
        alert("- La segunda fecha no puede ser menor a la primera.")
      } else{
        this._temperaturaService.getTimes(date1, time1, time2)
        .subscribe( (dataHumedad: any) => {
          this.datos = dataHumedad;
        });
      }
    }
    $("#date1").val('');
    $("#time1").val('');
    $("#date2").val('');
    $("#time2").val('');
  
    console.log(date1 + " " + time1 + " " + date2 + " " + time2);
  }
  
  


}
