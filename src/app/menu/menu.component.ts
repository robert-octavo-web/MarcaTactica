import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  AbrirMenu() {
    const menuElement = document.querySelector('.nav__link');
    menuElement?.classList.add('nav__link--show')
  }

  CerrarMenu(){
    const menuElement = document.querySelector('.nav__link');
    menuElement?.classList.remove('nav__link--show')
  }


}
