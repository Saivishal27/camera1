import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera,CameraOptions} from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	image:string;
	options: CameraOptions ={
		quality:100,
		destinationType: this.camera.DestinationType.DATA_URL,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE

	}
  constructor(private camera: Camera, public navCtrl: NavController) {

  }
  async takePicture(): Promise<any>{
  try{
	this.image=await this.camera.getPicture(options);
  }
  catch(err){
  	console.log(err);
  }
  }

}
