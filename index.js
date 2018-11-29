const app = new Vue({
    el: '#app',
    data: {
        frutas: [
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'Pera', cantidad: 0 },
            { nombre: 'Banana', cantidad: 12 },
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFrutas() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
        },
        otroMetodo() {

        }
    }
})