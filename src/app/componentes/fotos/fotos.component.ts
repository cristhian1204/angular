import { Component, OnInit } from '@angular/core';
import { fotos } from './fotos';

@Component({
  selector: 'fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
})
export class FotosComponent implements OnInit {
  mis_fotos = fotos;
  constructor() {}

  ngOnInit(): void {}
}
