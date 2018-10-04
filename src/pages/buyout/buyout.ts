import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-biuout',
    templateUrl: 'buyout.html'
})

export class BuyoutPage {
    productData: {name:string, quantity: number};

    constructor (private navParams: NavParams,
        private navCtrl: NavController) {}

        ngOnInit() {
            this.productData = this.navParams.data;
        }

        onGoBuy() {
            //this.navCtrl.pop();
            this.navCtrl.popToRoot();
           }
}