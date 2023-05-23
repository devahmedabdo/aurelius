import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() data: any;
  @Output() openForm = new EventEmitter<any>();
  constructor() {}
  open() {
    this.openForm.emit(true);
  }
  ngOnInit(): void {}
}
