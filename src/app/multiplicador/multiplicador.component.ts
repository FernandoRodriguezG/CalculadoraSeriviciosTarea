import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-multiplicador',
  templateUrl: './multiplicador.component.html',
  styleUrls: ['./multiplicador.component.css']
})
export class MultiplicadorComponent implements OnInit {

  constructor(private cpuservice:CpuService) { }

  get numero(){
    return this.cpuservice.getnumber();
  }

  ngOnInit(): void {
    // this.obtennumero();
  }

  multiplicar():void{this.cpuservice.multiplicar();}

}
