import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';

@Component({
  selector: 'app-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.css']
})
export class DivisorComponent implements OnInit {

  constructor(private cpuservice:CpuService) { }

  get numero(){
    return this.cpuservice.getnumber();
  }

  ngOnInit(): void {
    // this.obtennumero();
  }

  dividir():void{this.cpuservice.dividir();}

}
