/* 
    El proyecto es de comidas así que podemos hacer 3 tablas con productos de comida
    Va a ser una hamburguesería

    - Hamburguesas
    titulos: Id, Nombre, Descripción, Precio

    - Tapeo
    titulos: Id, Nombre, Descripción, Precio

    - Bebidas
    titulos: Id, Nombre, Precio
    


*/

/* Vue.component("tabla-hamburguesas", {
  props: {
    titulos: {
      type: Array,
      required: true,
    },
  },
  template: `
        <div class="col">
            <h2 class="mb-3">Tabla hamburguesas</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" v-for="(titulo, t) in titulos" :key="t"> {{ titulo }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    `,
});

let app = new Vue({
  el: "#app",
  data: {
    tablaHamburguesas: {
      titulos: ["Id", "Nombre", "Descripción", "Precio"],
    },
  },
  template: `
    <main class="container my-5">
        <tabla-hamburguesas :titulos="tablaHamburguesas.titulos"></tabla-hamburguesas>
    </main>
  `,
});
 */

Vue.component("table-products", {
  props: {
    titles: {
      type: Array,
      required: true,
    },
  },
  template: `
        <div class="col">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" v-for="(title, t) in titles" :key="t"> {{ title }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    `,
});

let app = new Vue({
  el: "#app",
  data: {
    hamburgers: {
      titles: ["Id", "Nombre", "Descripción", "Precio"],
    },
    tapas: {
      titles: ["Id", "Nombre", "Descripción", "Precio"],
    },
    drinks: {
      titles: ["Id", "Nombre", "Precio"],
    },
  },
  template: `
    <main class="container my-5">
        <div class="col mt-3 mb-5">
            <h2 class="mb-3">Hamburguesas</h2>
            <table-products :titles="hamburgers.titles"></table-products>
        </div>

        <div class="col mt-3 mb-5">
            <h2 class="mb-3">Tapas</h2>
            <table-products :titles="tapas.titles"></table-products>
        </div>

        <div class="col mt-3 mb-5">
            <h2 class="mb-3">Bebidas</h2>
            <table-products :titles="drinks.titles"></table-products>
        </div>
    </main>
  `,
});
