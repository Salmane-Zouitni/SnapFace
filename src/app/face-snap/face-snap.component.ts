import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapText!: string;

  ngOnInit() {
    this.snapText = 'Snap';
  }
  onSnap() {
    if (this.snapText == 'Snap') {
      this.faceSnap.snaps++;
      this.snapText = 'Oop! UnSnap';
    } else {
      this.faceSnap.snaps--;
      this.snapText = 'Snap';
    }
  }
}
