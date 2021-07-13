import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-qr',
  templateUrl: './popover-qr.component.html',
  styleUrls: ['./popover-qr.component.scss'],
})
export class PopoverQrComponent implements OnInit {
  @Input() qr:any;

  constructor() {}

  ngOnInit() {}

}
