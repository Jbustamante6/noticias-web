import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HocComponent } from './hoc.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [HocComponent],
  imports: [CommonModule, HeaderModule, FooterModule],
  exports: [HocComponent]
})
export class HocModule {}
