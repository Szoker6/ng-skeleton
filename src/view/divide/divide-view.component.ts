import {Component} from '@angular/core';

@Component({
    selector: 'ng-divide-view',
    templateUrl: 'divide-view.component.html',
    styleUrls: ['divide-view.component.css']
})
export class DivideViewComponent {
    firstNumber = "1";
    secondNumber = "2";
    divide = 0;

    divideNumbers() {
        this.divide = parseInt(this.firstNumber) / parseInt(this.secondNumber);
    }
}