import { Component, OnInit } from '@angular/core';
//var fs = require('fs'); 

//import {RouterModule, Router} from '@angular/router';
//import {  } from '../../Models/interprete';
import Parser from '../../Models/gramatica2';
import  {pr} from  '../../Models/interprete';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  File1: string = "";
  ast:any;
  opera:any;
  ast2:any;
  constructor(/*private router:Router*/) { }

  ngOnInit(): void {
  }

  ejecutar(){
    try{
      this.ast = Parser.parse(this.File1);
      this.ast2 = JSON.stringify(this.ast,null,2);
      console.log(this.ast);
      this.opera = ""+ pr(this.ast);
      //console.log(this.opera);
      (<HTMLInputElement>document.getElementById("Text2")).value = this.ast2;
      (<HTMLInputElement>document.getElementById("idConsola")).value = this.opera;
    }catch(error){

    }
    //console.log(this.File1);
    //let ast = Parser.parse(this.File1);

  }

  reporteSimbol(){
    //this.router.navigate(['/tblsimbolos']);
  }

}
