import {Component} from '@angular/core';

@Component({
    selector: 'ng-multiply-view',
    templateUrl: 'multiply-view.component.html',
    styleUrls: ['multiply-view.component.css']
})
export class MultiplyViewComponent {
    firstNumber = "1";
    secondNumber = "2";
    multiply = 0;

    multiplyNumbers() {
        this.multiply = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }
}