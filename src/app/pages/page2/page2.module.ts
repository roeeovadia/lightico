import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule,
    RouterModule
  ],
  declarations: [Page2Component],
  exports: [Page2Component],
})
export class Page2Module {}
