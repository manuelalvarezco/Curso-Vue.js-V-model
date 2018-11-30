const app = new Vue({
    el: '#app',
    data: {
        frutas: [
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'Pera', cantidad: 0 },
            { nombre: 'Banana', cantidad: 12 },
        ],
        nombreFruta: '',
        cantidadFruta: ''
    },
    methods: {
        agregarFrutas() {
            this.frutas.push({
                nombre: this.nombreFruta,
                cantidad: this.cantidadFruta
            });
            this.nombreFruta = '';
            this.cantidadFruta = '';
        }

    }
})