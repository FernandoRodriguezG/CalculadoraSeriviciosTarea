import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  num:number=15;

  constructor() {
    console.log("Iniciado");
   }

getnumber():number {
    
    return this.num;
  }

  sumar():void{
    console.log("sumnado desde el servicio")
    this.num+=2;
  }

  restar():void{
    this.num-=2;
  }

  dividir():void{
    this.num/=2;
  }
  multiplicar():void{
    this.num*=2;
  }

}
