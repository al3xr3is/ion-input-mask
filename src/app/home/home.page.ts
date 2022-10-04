import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.createForm();
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome:
        ['', [
          Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),
          // Validators.pattern(/^\d{1},\d{2}$/),
          Validators.required
        ]
      ]
    });
  }
}
