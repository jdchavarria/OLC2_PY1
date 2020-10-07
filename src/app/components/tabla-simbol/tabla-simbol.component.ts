import { Component, OnInit } from '@angular/core';
import {tabla_simbolos} from '../../Models/Tabla_Simbolos';

@Component({
  selector: 'app-tabla-simbol',
  templateUrl: './tabla-simbol.component.html',
  styleUrls: ['./tabla-simbol.component.css']
})
export class TablaSimbolComponent implements OnInit {

  tabla = tabla_simbolos;
  constructor() { }

  ngOnInit(): void {
  }

}
