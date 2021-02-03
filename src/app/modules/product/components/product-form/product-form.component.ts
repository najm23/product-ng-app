import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  @Output()
  productSubmit = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      price : new FormControl('', [Validators.required])
    });
  }

  submit(): void{
    this.productSubmit.emit(this.productForm.value);
  }


}
