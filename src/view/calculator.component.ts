import {Component} from '@angular/core';

@Component({
    selector: 'ng-calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent {
    calculationType = "sum";

    changeCalculationType(type:string) {
        this.calculationType = type;
    }
}