import {Component} from '@angular/core';

@Component({
    selector: 'ng-calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent {
    firstNumber = "1";
    secondNumber = "2";
    sum = 0;

    sumNumbers() {
        this.sum = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
}