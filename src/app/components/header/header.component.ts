import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerNav') headerNav:ElementRef;
  isOpen = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toogleMenu(){
    if(this.isOpen){
      this.renderer.removeClass(this.headerNav.nativeElement, 'active');
    }else{
      this.renderer.addClass(this.headerNav.nativeElement, 'active');      
    }
    this.isOpen = !this.isOpen;
  }

}
