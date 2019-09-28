import { Component, Input} from '@angular/core';
import { CourseInterface } from '../../../core.mod/interfaces/course-data-Interface.interface';


@Component({
  selector: 'te-app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input('data') course: CourseInterface;
  @Input() route: string;
}
