import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  snapText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.snapText = 'Snap';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  onSnap() {
    if (this.snapText == 'Snap') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapText = 'Oop! UnSnap';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapText = 'Snap';
    }
  }
}
