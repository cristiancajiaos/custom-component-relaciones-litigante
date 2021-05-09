import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relacion-litigante',
  templateUrl: './relacion-litigante.component.html',
  styleUrls: ['./relacion-litigante.component.scss']
})
export class RelacionLitiganteComponent implements OnInit {

  @Input() titulo: string = 'Tit';
  @Input() cantidad: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
