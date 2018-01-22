import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  printThis: string;

  constructor(private mediaService: MediaService) {

  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
  }

}
