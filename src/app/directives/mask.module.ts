import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskDirective } from './../directives/mask.directive';
import { InputMaskDirective } from './input-mask.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [MaskDirective],
  declarations: [MaskDirective, InputMaskDirective]
})
export class MaskDirectiveModule {}
