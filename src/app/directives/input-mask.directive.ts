/* eslint-disable @angular-eslint/directive-selector */
import { Directive, HostListener, ElementRef, Attribute } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[inputMask]',
  providers: [NgModel]
})
export class InputMaskDirective {
  pattern: string;

  constructor(
    private elementRef: ElementRef,
    public model: NgModel,
    @Attribute('mask') pattern: string
  ) {
    this.pattern = pattern;
  }

  @HostListener('window:keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const element = this.elementRef.nativeElement;
    let value = element.value;
    const pattern = this.pattern;

    if (event.code === 'U+0088' || event.key === 'Backspace') {
      if (value.length) {
        //prevent fatal exception when backspacing empty value in progressive web app
        //remove all trailing formatting then delete character
        while (pattern[value.length] && pattern[value.length] !== '*') {
          value = value.substring(0, value.length -1);
        }

        if (pattern.substring(0, value.length).indexOf('*') < 0) {
          value = value.substring(0, value.length - 1);
        }
      }
    } else {
      let maskIndex = value.length;
      let formatted = '';
      formatted += value;

      if (maskIndex < pattern.length) {
        // apply trailing formatting
        while (pattern[maskIndex] !== '*') {
          formatted += pattern[maskIndex];
          maskIndex++;
        }
      }

      value = formatted;
    }
    this.elementRef.nativeElement.maxlength = pattern.length;
    this.elementRef.nativeElement.value = value;
    if (this.model) {
      this.model.update.emit(value);
    }
    return true;
  }
}
