Vue.component("table-products", {
  props: {
    titles: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    cssClasses: {
      type: Object,
      required: false,
    },
  },
  template: `
        <div class="col">
            <table class="table" :class="cssClasses">
                <thead>
                    <tr>
                        <th scope="col" v-for="(title, t) in titles" :key="t"> {{ title }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, p) in products" :key="p">
                        <td>{{ p + 1 }} </td>
                        <td v-for="(row, r) in product" :key="r">{{ row }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
});

let app = new Vue({
  el: "#app",
  data: {
    hamburgers: {
      titles: ["Id", "Nombre", "Descripción", "Precio"],
      products: [
        ["Doble Bacon", "2 medallones de carne de 100gr, cheddar, panceta ahumada, cebolla caramelizada", "1120"],
        ["Baby Blue", "Medallón de carne de 100gr, queso azul, morrón, cebolla caramelizada, pepinillos", "1050"],
        ["Locura Not Burger", "Medallón not burger, guacamole, tomate, cebolla caramelizada, huevo frito", "1050"],
        ["Remolacha Pasión", "Medallón de remolacha, tomates cherry, mozzarella", "950"],
      ],
      cssClasses: {
        "table-dark": true,
        "text-warning": true,
      },
    },
    tapas: {
      titles: ["Id", "Nombre", "Descripción", "Precio"],
      products: [
        ["Papas con Cheddar", "Papas fritas con salsa cheddar", "550"],
        ["Papas Fogosas", "Papas fritas con salsa picante", "550"],
        ["Nachos Completos", "Nachos con queso cheddar y dip de guacamole", "750"],
        ["Mozzarellas Pasión", "Triángulos de queso mozzarella rebozados (6) con salsa de toma y guacamole", "950"],
      ],
      cssClasses: {
        "table-striped": true,
        "text-black-50": true,
      },
    },
    drinks: {
      titles: ["Id", "Nombre", "Precio"],
      products: [
        ["Coca Cola Lata 354ml", "250"],
        ["Sprite Lata 354ml", "250"],
        ["Agua Botella 500ml", "250"],
        ["Porrón Patagonia 500ml", "450"],
        ["Botella Patagonia 1 litro", "950"],
      ],
      cssClasses: {
        "table-light": true,
        "text-danger": true,
      },
    },
  },
  template: `
    <main class="container my-5">
        <div class="col mt-3 mb-5">
            <h2 class="mb-3">Hamburguesas</h2>
            <table-products 
                :titles="hamburgers.titles" 
                :products="hamburgers.products" 
                :cssClasses="hamburgers.cssClasses"
            ></table-products>
        </div>

        <div class="col mt-3 mb-5">
            <h2 class="mb-3">Tapas</h2>
            <table-products 
                :titles="tapas.titles" 
                :products="tapas.products"
                :cssClasses="tapas.cssClasses"
            ></table-products>
        </div>

        <div class="col mt-3 mb-5">
            <h2 class="mb-3">Bebidas</h2>
            <table-products 
                :titles="drinks.titles" 
                :products="drinks.products"
                :cssClasses="drinks.cssClasses"
            ></table-products>
        </div>
    </main>
  `,
});
