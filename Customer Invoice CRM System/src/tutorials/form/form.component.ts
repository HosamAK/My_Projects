import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  group?: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    const fb = this.fb;
    this.group = fb.group({
      name: fb.control('', [Validators.required]),
      phoneNumber: fb.control('', [Validators.required]),
      address: fb.control('', [Validators.required])
    });
  }
}
