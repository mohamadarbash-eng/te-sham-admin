import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
declare const M;

@Component({
  selector: 'te-app-handle-error',
  templateUrl: './handle-error.component.html',
  styleUrls: ['./handle-error.component.scss']
})

export class HandleErrorComponent implements  AfterViewInit, OnDestroy {
  @ViewChild('modal', { static: false }) modal: ElementRef;
  public modalInstance;

  ngAfterViewInit(): void {
  this.modalInstance = M.Modal.init(this.modal.nativeElement);
  }

  ngOnDestroy(): void {
    this.modalInstance.destroy();
  }
}
