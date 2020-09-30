import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';
import { StepperModule } from './components/stepper/stepper.module';
import { Page1Module } from './pages/page1/page1.module';
import { Page2Module } from './pages/page2/page2.module';
import { Page3Module } from './pages/page3/page3.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StepperModule,
    Page1Module,
    Page2Module,
    Page3Module,
    WizardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
