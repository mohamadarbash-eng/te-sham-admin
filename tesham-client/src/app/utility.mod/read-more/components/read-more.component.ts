import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'te-app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {
  @Input() routerLink: string;
  @Input() text: string;
  @Input() countChar: number;
  public readMoreSwitch = true;
  public slicedText: string;

  constructor() {
  }

  ngOnInit() {
    this.slicedText = this.slicedText = this.text && (this.text.slice(0, this.countChar)) + '...';
  }

  public onClickReadButton() {
    this.readMoreSwitch = !this.readMoreSwitch;
  }

  public get getText(): string {
    if (this.readMoreSwitch) {
      return this.slicedText;
    }
    return this.text;
  }
}
