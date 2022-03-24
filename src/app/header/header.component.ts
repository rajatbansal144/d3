import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  codeList = [
    { code: 'abcdhe568dhjkldn', name: 'Daily Report' },
    { code: 'ksdkcs7238t8cds', name: 'Esclations' },
    { code: 'kascggibebbi', name: 'SPI Report' }
    ];

}
