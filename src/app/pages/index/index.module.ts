import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { CardsModule } from '../../components/cards/cards.module';
import { PrincipalModule } from '../../components/principal/principal.module';
import { AlertInformationModule } from '../../components/alert-information/alert-information.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    CardsModule,
    PrincipalModule,
    AlertInformationModule,
    FooterModule
  ],
})
export class IndexModule {}
