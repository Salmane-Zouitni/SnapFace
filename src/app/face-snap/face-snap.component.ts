import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnapes/${this.faceSnap.id}`);
  }
  @Input() faceSnap!: FaceSnap;
  snapText!: string;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: Router
  ) {}
  ngOnInit() {
    this.snapText = 'Snap';
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
