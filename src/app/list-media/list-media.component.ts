import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';


@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  printThis: string;
  mediaArray: any;

  constructor(public mediaService: MediaService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      /*this.mediaArray.forEach( media => {
        const oldURL = media.filename.split('.');
        const thumbName = URL[0] + '-tn320.png';
        this.mediaArray.media['thumbnail'] = thumbName;
      });*/
      this.mediaArray.map( media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        media.thumbnail = thumbName;
      });
    });
  }

}
