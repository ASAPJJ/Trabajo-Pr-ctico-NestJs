import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  create(product: Product): Product {
    product.id = this.products.length + 1;
    this.products.push(product);
    return product;
  }

  update(id: number, productData: Partial<Product>): Product {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }
    Object.assign(product, productData);
    return product;
  }

  remove(id: number): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      return false;
    }
    this.products.splice(index, 1);
    return true;
  }
}
