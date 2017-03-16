import '../../public/css/style.css';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CalculatorComponent} from '../view/calculator.component';
import {FormsModule} from '@angular/forms';
import {SumViewComponent} from "../view/sum/sum-view.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CalculatorComponent, SumViewComponent
  ],
  bootstrap: [CalculatorComponent],
  providers: []
})
export class CalculatorModule {
  constructor() {

  }
}