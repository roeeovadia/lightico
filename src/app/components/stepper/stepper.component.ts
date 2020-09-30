import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() steps:I;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  currentURL = '';
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.url);

    this.router.events.subscribe((event) => {
      // console.log(event instanceof NavigationEnd);
      if (event instanceof NavigationEnd) {
        //  alert('navigation succeeded');
        // console.log('event', event);
        this.currentURL = event.url;
      }
    });
  }

  isActive(path): boolean {
    debugger;
    return this.currentURL.includes(path);
  }
  isComplete(step: number): boolean {
    return true;
  }
}
