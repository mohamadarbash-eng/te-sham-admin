import { Component, Input, OnInit } from '@angular/core';
import { SocialIconsInterfaces }    from './social-icons-interfaces';

@Component({
  selector: 'te-app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {
  @Input() socialIconsData: Array<SocialIconsInterfaces>;
}
