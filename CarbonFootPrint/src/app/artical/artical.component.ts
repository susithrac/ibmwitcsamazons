import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.scss']
})
export class ArticalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() displayState: string;
  @Input() userName: string;
  @Input() imageSrc: string;

}
