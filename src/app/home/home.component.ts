import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { WorkCardComponent } from '../work-card/work-card.component';
import {ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, WorkCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent{
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() 
  {
    {
      console.log(pageYOffset);
      const demoDiv = document.querySelector("#line-content");
      if (demoDiv)
      {
        if(pageYOffset > 0)
          {
            demoDiv.classList.add("no-hover");
          }
          else
          {
            demoDiv.classList.remove("no-hover");
          }
        demoDiv.setAttribute('style', 'height: '+(pageYOffset+140)+'px;'); 
        console.log(demoDiv.getAttribute('style'));
      }
    }
  }
 

}
