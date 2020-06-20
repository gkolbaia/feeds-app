import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [MatToolbarModule, MatInputModule, ScrollingModule],
  exports: [MatToolbarModule, MatInputModule, ScrollingModule],
})
export class AngularMaterialModule {}
