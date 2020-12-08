import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {


  pathsList  = [
    {
      name: 'Home',
      path: 'tabs/home',
      icon : 'home'
    },
    {
      name: 'Shopping',
      path: 'tabs/detail',
      icon : 'cart'
    },
    {
      name: 'Profile',
      path: 'tabs/profile',
      icon : 'person'
    },
    {
      name: 'Contact',
      path: 'tabs/contact',
      icon : 'call'
    },
    {
      name: 'Maps',
      path: 'tabs/map',
      icon : 'map'
    },
    {
      name: 'Directions',
      path: 'tabs/leaflet',
      icon : 'navigate'
    },
    {
      name: 'maps',
      path: 'tabs/maps',
      icon : 'locate'
    },
    {
      name: 'cartview',
      path: 'tabs/cartview',
      icon : 'cart'
    }
]
  constructor(private router: Router) { }
  ngOnInit() {
  }
  goProfile(){
    this.router.navigateByUrl('sidemenu/profile');
  }
  goProfileTab(){
    this.router.navigateByUrl('sidemenu/profile-tab');
  }
  goContact(){
    this.router.navigateByUrl('sidemenu/contact');
  }
  goMaps(){
    this.router.navigateByUrl('sidemenu/maps');
  }
  goLeaflet(){
    this.router.navigateByUrl('sidemenu/leaflet');
  }
  goDetail(){
    this.router.navigateByUrl('sidemenu/detail');
  }
  goCart(){
    this.router.navigateByUrl('sidemenu/cartview');
  }
  
  moveToPath(path){
      this.router.navigateByUrl('sidemenu/' + path.path);
  }

}
