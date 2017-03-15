import '../../public/css/style.css';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CalculatorComponent} from '../view/calculator.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CalculatorComponent
  ],
  bootstrap: [CalculatorComponent],
  providers: []
})
export class CalculatorModule {
  constructor() {

  }
}