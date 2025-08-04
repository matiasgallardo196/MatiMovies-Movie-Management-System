const CarritoCompra = require("../index.js");

describe("Initialize the cart as an empty array", () => {
  it("Initialize the cart as an empty array", () => {
    const carritoCompra = new CarritoCompra();
    expect(carritoCompra.carrito).toEqual([]);
  });
});

describe("Receive an object representing a product and add it to the cart", () => {
  it("Receive an object representing a product and add it to the cart", () => {
    const carritoCompra = new CarritoCompra();
    const producto = {
      nombre: "producto",
      precio: 5,
    };
    carritoCompra.agregarProducto(producto);
    expect(carritoCompra.carrito).toEqual([producto]);
  });
});

describe("Calculate the total purchase by adding the prices of all products in the cart", () => {
  it("Calculate the total purchase by adding the prices of all products in the cart", () => {
    const carritoCompra = new CarritoCompra();
    const producto = {
      nombre: "producto",
      precio: 5,
    };
    const producto2 = {
      nombre: "producto",
      precio: 6,
    };
    carritoCompra.agregarProducto(producto);
    carritoCompra.agregarProducto(producto2);
    expect(carritoCompra.calcularTotal()).toBe(
      producto.precio + producto2.precio
    );
  });
});

describe("Apply a discount to the total purchase according to the specified percentage", () => {
  it("Apply a discount to the total purchase according to the specified percentage", () => {
    const carritoCompra = new CarritoCompra();
    carritoCompra.agregarProducto({ nombre: "producto1", precio: 100 });

    expect(carritoCompra.aplicarDescuento(10)).toBe(90);
  });
});

// constructor(): Initialize the cart as an empty array.

// agregarProducto(producto): Receive an object representing a product and add it to the cart.

// calcularTotal(): Calculate the total purchase by adding the prices of all products in the cart.

// aplicarDescuento(porcentaje): Apply a discount to the total purchase according to the specified percentage.
