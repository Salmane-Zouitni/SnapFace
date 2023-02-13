import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Salmane zouitni',
      description:
        'Salmane is a social media platform for sharing photos and videos.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 100,
      location: 'paris',
    },
    {
      id: 2,
      title: 'alikhandroo',
      description:
        'Manrtiniss is a social media platform for sharing photos and videos.',
      imageUrl: 'https://i.ibb.co/VBvdyw9/maxresdefault.jpg',
      createdDate: new Date(),
      snaps: 150,
      location: 'Mexico',
    },
    {
      id: 3,
      title: 'Gujo Saturo',
      description:
        'Gujo Saturo is one of the most famous Japanese artists. He is known for his',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 200,
    },
  ];

  getAllFAceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap Not Found!');
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap') {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
