import { Component, OnInit, ViewChild } from '@angular/core';
import { SimplemdeComponent, SimplemdeOptions } from 'ngx-simplemde';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('simplemde', { static: true }) private readonly simplemde!: SimplemdeComponent;
  simplemdeContent = `# test heading
  ## test heading 2
  Un peu de texte avec un mot en *gras* et un en _italique_`;
  options: SimplemdeOptions = {
    /* toolbarTips: false,  */
    status: false
  }

  ngOnInit(): void {
  }

}
