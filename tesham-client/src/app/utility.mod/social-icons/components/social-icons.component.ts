import { Component, Input } from '@angular/core';
import { SocialIconsInterfaces } from '../interfaces/social-icons-interfaces';

@Component({
  selector: 'te-app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent {
  @Input() socialIconsData: Array<SocialIconsInterfaces>;
  @Input() isTooltips = false;
  @Input() tooltipsText: string;
  @Input() tooltipsPosition: string;
}
