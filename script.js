
var app = new Vue({
    el : '#app',
    data : {
        cart :[],
        maximum: 99,
        products : null
    },
    methods:{
        addItem : function(product){
            this.cart.push(product);
        }
    },
    mounted: function(){
        fetch('https://hplussport.com/api/products/order/price')
        .then((result)=>result.json())
        .then(data => {
            // console.log(data);
            this.products = data;
        })
    }
});