"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getById(2);
//result = _productService.getProducts();
var p = new Product_1.Product();
p.id = 2;
p.name = "Iphone 6";
p.price = 4000;
p.category = "Telefon";
//_productService.saveProduct(p)
_productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
