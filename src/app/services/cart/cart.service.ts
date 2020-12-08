import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Food',
      expanded: true,
      products: [
        { id: 0, name: 'Meal ', price: '8', image: 'Food.jpg'},
        { id: 1, name: 'Takeouts', price: '5', image: 'Food' },
        { id: 2, name: 'Tuna', price: '9' , image: 'Food'},
        { id: 3, name: 'Hawai', price: '7', image: 'Food' }
      ]
    },
    {
      category: 'Drinks',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8', image: 'Drinks' },
        { id: 5, name: 'Bolognese', price: '6', image: 'Drinks' },
        { id: 6, name: 'Ham & Egg', price: '8', image: 'Drinks' },
        { id: 7, name: 'Basic', price: '5' , image: 'Drinks'},
        { id: 8, name: 'Ceaser', price: '9', image: 'Drinks' },
        { id: 9, name: 'Ham & Egg', price: '8', image: 'Drinks' },
        { id: 10, name: 'Basic', price: '5', image: 'Drinks' },
        { id: 11, name: 'Ceaser', price: '9', image: 'Drinks' }
      ]
    },
    {
      category: 'Goodies',
      products: [
        { id: 12, name: 'Ham & Egg', price: '8', image: 'Goodies' },
        { id: 13, name: 'Basic', price: '5', image: 'Goodies'},
        { id: 14, name: 'Ceaser', price: '9', image: 'Goodies' },
        { id: 15, name: 'Ham & Egg', price: '8', image: 'Goodies' },
        { id: 16, name: 'Basic', price: '5', image: 'Goodies' },
        { id: 17, name: 'Ceaser', price: '9', image: 'Goodies' }
      ]
    }
  ];
 
  private cart = [];
  cartList = [];

  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
  // Zano
  addToCart(item){
    this.cartList.push({name: item.name, colour: item.colour, age: item.age});
  }
  removeFromCart(item){
 
    var index = this.cartList.indexOf(item);
    if(index !== -1){
      this.cartList.splice(index,1);
    }
    return this.cartList;
  }
  getCartList() {
    return this.cartList;
  }
 setCart(cartlist){
  this.cartList = cartlist;
 }

}