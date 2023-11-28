import { Component, Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import {DowloandService} from '../app/services/dowloand.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  

  menuVisible = false;
  habilidadesVisible = false;
  enlaceURL: string = 'williamreyes082@gmail.com';
  gitHub: string = 'github.com/williamre574/';
  constructor(private el: ElementRef,
     private renderer: Renderer2,
     private downloadService: DowloandService) {}

     CV() {
      this.downloadService.downloadFile();
     }

  mostrarOcultarMenu() {
    const navElement = this.el.nativeElement.querySelector('#nav');
    this.menuVisible = !this.menuVisible;

    if (this.menuVisible) {
      this.renderer.addClass(navElement, 'responsive');
    } else {
      this.renderer.removeClass(navElement, 'responsive');
    }
  }

  seleccionar() {
    const navElement = this.el.nativeElement.querySelector('nav');
    this.menuVisible = false;
    this.renderer.removeClass(navElement, 'responsive');
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const distancia_skills = window.innerHeight - this.el.nativeElement.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      this.addAnimationClass('javascript', 0);
      this.addAnimationClass('htmlcss', 1);
      this.addAnimationClass('typescript', 2);
      this.addAnimationClass('angular', 3);
      this.addAnimationClass('react', 4);
      this.addAnimationClass('rxjs', 5);
      this.addAnimationClass('reactnative', 6);
      this.addAnimationClass('node', 7);
      this.addAnimationClass('php', 8);
      this.addAnimationClass('comunicacion', 9);
      this.addAnimationClass('trabajo', 10);
      this.addAnimationClass('creatividad', 11);
      this.addAnimationClass('dedicacion', 12);
    }
  }

  private addAnimationClass(className: string, index: number) {
    const habilidades = this.el.nativeElement.getElementsByClassName('progreso');
    this.renderer.addClass(habilidades[index], className);
  }







  // efectoHabilidades() {
  //   var skills = document.getElementById('skills');
  //   var distancia_skills =
  //     window.innerHeight - skills!.getBoundingClientRect().top;
  //   if (distancia_skills >= 300) {
  //     let habilidades = document.getElementsByClassName('progreso');
  //     habilidades[0].classList.add('javascript');
  //     habilidades[1].classList.add('htmlcss');
  //     habilidades[2].classList.add('typescript');
  //     habilidades[3].classList.add('angular');
  //     habilidades[4].classList.add('react');
  //     habilidades[5].classList.add('rxjs');
  //     habilidades[6].classList.add('reactnative');
  //     habilidades[7].classList.add('node');
  //     habilidades[8].classList.add('php');
  //     habilidades[9].classList.add('comunicacion');
  //     habilidades[10].classList.add('trabajo');
  //     habilidades[11].classList.add('creatividad');
  //     habilidades[12].classList.add('dedicacion');

  //   }
  // }

  // //detecto el scrolling para aplicar la animacion de la barra de habilidades
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event) {
  //   this.efectoHabilidades();
  // }







  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.seleccionar(); // Opcional: Ocultar el menú después de hacer clic en el enlace
    }
  }
}
