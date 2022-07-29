let input = document.getElementById("unitario");
let botonu = document.getElementById("ingresar");
let botont = document.getElementById("total");
let lista = document.getElementById("lista");
let precioTotal: number = 0;
let arrProducto: number[] = [];

function agregarProductos(): number[] {
  let producto = Number(input.value);
  arrProducto.push(producto);
  lista?.innerHTML += ` <li>${producto}</li> `;
}

botonu?.addEventListener("click", agregarProductos);

function sumaTotal(): void {
  for (let i: number = 0; i < arrProducto.length; i++) {
    precioTotal += arrProducto[i];
  }
  lista?.innerHTML += `El total de la compra es $ ${precioTotal.toString()} `;
}

botont?.addEventListener("click", sumaTotal);
