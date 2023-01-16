import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Salmane',
        description:
          'Salmane is a social media platform for sharing photos and videos.',
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'paris',
      },
      {
        title: 'alikhandroo',
        description:
          'Manrtiniss is a social media platform for sharing photos and videos.',
        imageUrl: 'https://i.ibb.co/VBvdyw9/maxresdefault.jpg',
        createdDate: new Date(),
        snaps: 1,
        location: 'Mexico',
      },
      {
        title: 'Gujo Saturo',
        description:
          'Gujo Saturo is one of the most famous Japanese artists. He is known for his',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 2,
      },
    ];
  }
}
