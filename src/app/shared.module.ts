import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CdkAccordionModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    CdkAccordionModule,
  ],
})
export class SharedModule {}
