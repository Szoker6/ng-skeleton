import '../../public/css/style.css';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CalculatorComponent} from '../view/calculator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
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