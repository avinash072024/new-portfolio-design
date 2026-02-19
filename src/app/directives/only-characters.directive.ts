import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyCharacters]'
})
export class OnlyCharactersDirective {

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    // Allow only letters and spaces
    let value = input.value.replace(/[^a-zA-Z ]/g, '');

    // Allow only single space between words
    value = value.replace(/\s+/g, ' ');

    // Capitalize first letter and letter after space
    value = value.replace(/\b\w/g, char => char.toUpperCase());

    input.value = value;
  }

}
