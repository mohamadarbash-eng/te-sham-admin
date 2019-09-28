import { Component, Input} from '@angular/core';
import { DiplomaInterface } from '../../../core.mod/interfaces/diploma-data-Interface.interface';

@Component({
  selector: 'te-app-diploma-card',
  templateUrl: './diploma-card.component.html',
  styleUrls: ['./diploma-card.component.scss']
})
export class DiplomaCardComponent {
  @Input('data') diploma: DiplomaInterface;
  @Input() route: string;

}
