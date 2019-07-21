import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
declare const M;

@Component({
  selector: 'te-app-handle-error',
  templateUrl: './handle-error.component.html',
  styleUrls: ['./handle-error.component.scss']
})

export class HandleErrorComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('modal', { static: true }) modal: ElementRef;
  public modalInstance;
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  this.modalInstance = M.Modal.init(this.modal.nativeElement);
  }

  ngOnDestroy(): void {
    this.modalInstance.destroy();
  }
}
