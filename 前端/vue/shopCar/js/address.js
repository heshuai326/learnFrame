new Vue({
    el:'#app',
    data:{
        addressList:[],
        limit:3,
        isClick:false,
        currentIndex:0,
        send:true
    },
    methods: {
     toDefault:function(addressId){
         this.addressList.forEach(function(item){
           if(item.addressId = addressId){
             item.isDafault = true
           }else{
               item.isDafault = false;
           }   
         })
     },
     remove:function(index){
         console.log(index);
        this.addressList.splice(index,1);
     }
    },
    computed: {
        limitAddress:function(){
            return this.addressList.slice(0,this.limit);
        }
    },
    mounted:function () {
        this.$http.get('./data/address.json')
            .then(res => {
        this.addressList = res.body.result;
        }, e =>{
            console.log(e);
        })
    }
})
