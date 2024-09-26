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
      }
    }
  }

  public scrollto() 
  {
    console.log("hi");
    var work = document.querySelector("#my-work");
    if (work)
    {
      console.log(work);
      work.scrollIntoView({behavior:"smooth"});
    }
  }
 

}
