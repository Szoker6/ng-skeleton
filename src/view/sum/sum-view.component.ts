import {Component} from '@angular/core';

@Component({
    selector: 'ng-sum-view',
    templateUrl: 'sum-view.component.html',
    styleUrls: ['sum-view.component.css']
})
export class SumViewComponent {
    firstNumber = "1";
    secondNumber = "2";
    sum = 0;

    sumNumbers() {
        this.sum = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
}