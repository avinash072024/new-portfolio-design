import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { OnlyCharactersDirective } from '../../directives/only-characters.directive';
declare var $: any;

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  location: string = 'Kolhapur, Maharashtra, India';
  email: string = 'avinashmarbhal1994@outlook.com';
  mobile: string = '+91 87964 57407';
}
