import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
  RouterModule
  ],
  declarations: [Page3Component],
  exports: [Page3Component],
})
export class Page3Module {}
