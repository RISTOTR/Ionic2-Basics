import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { BuyoutPage } from '../buyout/buyout';


@Component({
    selector: 'page-shop',
    templateUrl: 'shop.html'
})

export class ShopPage {
    constructor (private navCtrl: NavController) {}

    onGoToBuyout() {
        this.navCtrl.push(BuyoutPage);
      }

      onLoadProduct(productData: {name: string, quantity: number}) {
        this.navCtrl.push(BuyoutPage, productData);
       }
}