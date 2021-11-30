import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlideEffect]',
})
export class SlideEffectDirective {
  constructor(public _element: ElementRef) {}

  @HostListener('click', ['$event']) onClick(): void {
    let index = 0;
    let slides = this._element.nativeElement.childNodes[0].childNodes;

    if (
      this._element.nativeElement.children['next-slide'].id === 'next-slide'
    ) {
      this._element.nativeElement.children['next-slide'].addEventListener(
        'click',
        next()
      );
    } else if (
      this._element.nativeElement.children['prev-slide'].id === 'prev-slide'
    ) {
      this._element.nativeElement.children['prev-slide'].addEventListener(
        'click',
        prev()
      );
    }

    function next() {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }
    function prev() {
      slides[index].classList.remove('active');
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add('active');
      console.log(index);
    }
  }
}
