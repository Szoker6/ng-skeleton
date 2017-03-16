import '../../public/css/style.css';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CalculatorComponent} from '../view/calculator.component';
import {FormsModule} from '@angular/forms';
import {SumViewComponent} from "../view/sum/sum-view.component";
import {MultiplyViewComponent} from "../view/multiply/multiply-view.component";
import {SubViewComponent} from "../view/sub/sub-view.component";
import {DivideViewComponent} from "../view/divide/divide-view.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    CalculatorComponent, SumViewComponent, MultiplyViewComponent, SubViewComponent, DivideViewComponent
  ],
  bootstrap: [CalculatorComponent],
  providers: []
})
export class CalculatorModule {
  constructor() {

  }
}