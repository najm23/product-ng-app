import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();

  constructor() { }

  ngOnInit(): void {

    this.products.push(new Product('Produit 1', 10));
    this.products.push(new Product('Produit 2', 10));
    this.products.push(new Product('Produit 3', 10));
    this.products.push(new Product('Produit 4', 10));
    this.products.push(new Product('Produit 5', 10));
    this.products.push(new Product('Produit 6', 10));
  }

}
