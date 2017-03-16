import {Component} from '@angular/core';

@Component({
    selector: 'ng-sub-view',
    templateUrl: 'sub-view.component.html',
    styleUrls: ['sub-view.component.css']
})
export class SubViewComponent {
    firstNumber = "1";
    secondNumber = "2";
    sub = 0;

    subNumbers() {
        this.sub = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }
}