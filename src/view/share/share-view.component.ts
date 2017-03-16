import {Component} from '@angular/core';

@Component({
    selector: 'ng-share-view',
    templateUrl: 'share-view.component.html',
    styleUrls: ['share-view.component.css']
})
export class ShareViewComponent {
    firstNumber = "1";
    secondNumber = "2";
    share = 0;

    shareNumbers() {
        this.share = parseInt(this.firstNumber) / parseInt(this.secondNumber);
    }
}