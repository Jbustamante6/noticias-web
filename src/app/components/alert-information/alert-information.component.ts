import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert-information',
  templateUrl: './alert-information.component.html',
  styleUrls: ['./alert-information.component.css']
})
export class AlertInformationComponent implements OnInit {

  @Input() isClosable = false;
  @Input() backgroundClass:string = null;
  @Input() backgroundImage:string = null;

  @ViewChild('alertInfo') alertInfo:ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  closeAlert(){
    this.renderer.addClass(this.alertInfo.nativeElement, 'd-none');
  }

}
