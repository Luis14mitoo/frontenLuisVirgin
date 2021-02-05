import { Component, OnInit } from '@angular/core';
import Persona from '../interfaces/persona';
import Perasona from '../interfaces/persona'

import {ServicioService} from '../servicio.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})




export class InicioComponent implements OnInit {

 
  personaA:any;
  
  personaB:any;
  
  personaC={
    id:"Escribe el id",
    nombres:"Escribe los nombres",
    apellidos:"Escribe los apellidos",
    ciudad:"Escribe la ciudad"
  }
  
  personaD:Persona ={
    id:0,
    nombres:"",
    apellidos:"",
    tipo_documento:"",
    cedula:0,
    fecha_nacimiento: null,
    direccion:""

  }
  
  id_persona="";
  constructor(
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
   
  }

  escribir(){
    console.log()
  }

  reiniciar(){
    console.log(
      this.personaB.id,"  ",
      this.personaB.nombres,"  ",
      this.personaB.apellidos,"  ",
      this.personaB.ciudad,"  ")
    this.personaB.id=0;
    this.personaB.nombres="";
    this.personaB.apellidos="";
    this.personaB.ciudad="";
  }

  traerEmpleado(){
       this.servicioService.getPeronas().subscribe(
      res=>{
       this.personaA=res;
        console.log(this.personaA);       
      },
      err=>console.error(err)
      )
  }

  crearPerona(){

  }
}
