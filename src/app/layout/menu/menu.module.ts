import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterLink,
  ],
})
export class MenuModule {}
