import { Component, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../../app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartviewPage } from './../../app/page/cartview/cartview.page'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  products = [];

  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef}) fab: ElementRef;
  selectedCategory: string = 'PIZZA';
  categories: string[] = ['PIZZA', 'BURGER', 'DESSERTS', 'SNACKS', 'DRINKS'];
  viewProducts =[];
  constructor(private cartService: CartService,private router: Router, private modalCtrl: ModalController) {
  }
  ngOnInit(){
  //  this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.viewProducts =  this.cartService.getCategory(this.selectedCategory);
  }
  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('Added');
  }
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
    let modal = await this.modalCtrl.create({
      component: CartviewPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
  onCategoryTabChange(event){
    this.viewProducts = this.cartService.getCategory(event.detail.value);
  }
  onProductClick(product){
    this.router.navigate(['view-product']);
  }

}
