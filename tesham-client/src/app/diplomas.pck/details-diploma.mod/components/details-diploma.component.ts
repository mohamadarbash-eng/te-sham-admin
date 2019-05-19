import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { BreadcrumbPagesState } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.reducer';
import { API_PATH, ProxyService } from '../../../core.mod/proxy/services/proxy.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InitBreadcrumb } from '../../../utility.mod/breadcrumb-pages/store/breadcrumb-pages.action';
import { routes } from '../../../routes-model';
import { itemType } from '../../../utility.mod/breadcrumb-pages/components/breadcrumb-pages.component';
import { DiplomaInterface } from '../../../core.mod/interfaces/diploma-data-Interface.interface';

@Component({
  selector: 'te-app-details-course',
  templateUrl: './details-diploma.component.html',
  styleUrls: ['./details-diploma.component.scss']
})
export class DetailsDiplomaComponent implements OnInit {
  public diplomaDetails: DiplomaInterface;
  public courseCount: number;

  constructor(private _store: Store<BreadcrumbPagesState>, proxyService: ProxyService, route: ActivatedRoute) {
    /*   route.paramMap.pipe(
         switchMap((params: ParamMap) =>
           proxyService.getProxy(API_PATH.COURSE_DETAILS_API, null, {id: params.get('courseName')})
       )).subscribe((response: CourseDataInterface) => {
           this.courseDetails = response['courses'];
         });
         */
    this.diplomaDetails = {
      id: 'fdfdfdffd',
      imageAlt: 'imageAlt',
      imageUrl: 'course_2.jpg',
      title: 'English Grammar',
      diplomaName: '',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis',
      diplomaDetails: {
        medias: [{type: 'image', title: 'String', alt: 'test-1.png', url: 'test-1.png'}, {
          type: 'image',
          title: 'String',
          alt: 'test-1.png',
          url: 'test-1.png'
        }, {type: 'image', title: 'String', alt: 'test-1.png', url: 'test-1.png'}],
        reviews: [{memo: ''}],
        diplomaDescription:
          {
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittisLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis'
          },
        curriculum: {
          title: 'Lorem ipsum dolor sit amet',
          subTitle: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
          content: [
            {
              title: 'Lorem ipsum dolor sit amet',
              subTitle: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis'
            },
            {
              title: 'Lorem ipsum dolor sit amet',
              subTitle: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis ',
              subCurriculum: [{
                title: 'string',
                subTitle: 'string',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis'
              }]
            },
            {
              title: 'Lorem ipsum dolor sit amet',
              subTitle: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis',
              subCurriculum: [{
                title: 'string',
                subTitle: 'string',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis'
              }, {
                title: 'string',
                subTitle: 'string',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis'
              }]
            }
          ],
        },
        breadCrumb: [{label: 'reviews', linkTo: 'reviews'}, {
          label: 'curriculum',
          linkTo: 'curriculum'
        }, {label: 'diplomaDescription', linkTo: 'diplomaDescription'}]
      },
      category: 'Art & Design',
      price: 15000,
      rating: 4.3
    };

    this.diplomaDetails.diplomaDetails['curriculum'].content = [...this.diplomaDetails.diplomaDetails['curriculum'].content.map((item) => ({
      ...item,
      expand: false
    }))];

    this.diplomaDetails.diplomaDetails['breadCrumb'].forEach((item) => {
      this.diplomaDetails.diplomaDetails[item.label].linkTo = item.linkTo;
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    const temp = [
      {
        item: itemType.primary,
        label: 'Homepage',
        route: '/'
      },
      {
        item: itemType.primary,
        label: 'Courses',
        route: '/' + routes.courses
      },
      ...this.diplomaDetails.diplomaDetails['breadCrumb']
    ];
    this._store.dispatch(new InitBreadcrumb({data: temp}));
  }

  public onClickExpand(item) {
    item.expand = !item.expand;
    return;
  }

}
