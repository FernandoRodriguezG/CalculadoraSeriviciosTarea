import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-restador',
  templateUrl: './restador.component.html',
  styleUrls: ['./restador.component.css']
})
export class RestadorComponent implements OnInit {

  constructor(private cpuservice:CpuService) { }

  get numero(){
    return this.cpuservice.getnumber();
  }

  ngOnInit(): void {
    // this.obtennumero();
  }

  resta():void{this.cpuservice.restar();}

}
