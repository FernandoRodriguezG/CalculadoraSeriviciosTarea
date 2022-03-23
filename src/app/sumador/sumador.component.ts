import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-sumador',
  templateUrl: './sumador.component.html',
  styleUrls: ['./sumador.component.css']
})
export class SumadorComponent implements OnInit {

  constructor(private cpuservice:CpuService) { }

  ngOnInit(): void {}

  get numero(){
    return this.cpuservice.getnumber();
  }

  suma():void{this.cpuservice.sumar();}

}
