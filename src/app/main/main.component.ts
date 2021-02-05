import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[
    trigger("fadeInTrigger",[
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-100px)" }),
          stagger(35, [
            animate(
              "500ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  state = "inactive"
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.state="active"
    }, 3000)
  }

}
