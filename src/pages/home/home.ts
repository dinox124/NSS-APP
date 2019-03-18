import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { Http } from "@angular/http";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  moviesList;
  constructor(public navCtrl: NavController, private http: Http,private imageViewerCtrl:ImageViewerController) {
    this.http.get("https://collegekarur.herokuapp.com/nss-img").toPromise().then((filmList) => {
      console.log(filmList.json());
      this.moviesList = filmList.json();
    }, (err) => {
      console.log(err);
    })
  }
  

}
