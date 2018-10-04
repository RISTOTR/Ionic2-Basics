import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
    selector: 'page-biuout',
    templateUrl: 'buyout.html'
})

export class BuyoutPage implements OnInit {
    product: string;

    constructor (private navParams: NavParams,
        private navCtrl: NavController) {}

        ngOnInit() {
            this.product = this.navParams.get('productName');
        }

        onGoBuy() {
            //this.navCtrl.pop();
            this.navCtrl.popToRoot();
           }
}