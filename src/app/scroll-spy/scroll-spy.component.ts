import {Component, HostListener} from '@angular/core';
import {RouterLink} from "@angular/router";
import {fromEvent, pipe, throttleTime} from "rxjs";


@Component({
  selector: 'app-scroll-spy',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './scroll-spy.component.html',
  styleUrl: './scroll-spy.component.css'
})
export class ScrollSpyComponent {

  // https://www.youtube.com/watch?v=S0bn-HlFFbA

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(10))
      .subscribe(event => this.onWindowScroll(event));
  }

  // @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Logic to handle scroll event
    let scrollPosition: number = window.scrollY ||document.documentElement.scrollTop;
    scrollPosition = scrollPosition + 60;  // adjust as required

    const sections = document.querySelectorAll('.section');

    sections.forEach((section: any) => {

      if(section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition){
        console.log(`I'm in ${section.id}`);

        let navLinks: any = document.querySelectorAll('.mynav ul li a');
        navLinks.forEach((link: HTMLAnchorElement) => {
          if(link.href.includes(section.id)){
            console.log(`section Id = ${section.id} will be activated`)
            link.classList.add('active');
          }else {
            console.log(`section Id = ${section.id} will be De-activated`)
            link.classList.remove('active');
          }
        })
      }
    })

  }


}
