import { Component, ViewChild } from '@angular/core';
import { SimplemdeComponent, SimplemdeOptions } from 'ngx-simplemde';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('simplemde', { static: true }) private readonly simplemde!: SimplemdeComponent;
  simplemdeContent = `# Titre H1
  ## Titre H2
  
  ### Titre H3 etc...
  
  Un peu de texte avec un mot en **gras** et un en *italique*
  Du texte barré
  
  \`du code qu'il est beau\`
  
  > Une citation qui 
  > raconte pas grand chose
  > d'intéressant visiblement
  
  -----
  
  * puce 1
  * puce 2
  * puce 3
  
  -----
  
  1. puce 1
  2. puce 2
  3. puce 3
  
  -----
  
  [lien google](https://www.google.fr)
  
  -----
  
  ![titre_image](https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg)
  
  -----
  
  | Column 1 | Column 2 | Column 3 |
  | -------- | -------- | -------- |
  | Text     | Text     | Text     |
  `;

  options: SimplemdeOptions = {
    /* toolbarTips: false,  */
    status: false
  };

}
