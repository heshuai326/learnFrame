new Vue({
    el:".container",
    data(){
       return {
            addressList:[],
           currentIndex:0,
           limit:3,
           xuanpei:true
       }
    },
    mounted:function () {
        this.$nextTick(()=>{
            this.getList();
        })
    },
    methods:{
        getList:function () {
            this.$http.get("./data/address.json",{}).then((res)=>{
                var data = res.data;
                // console.log(data)
                if(data.status){
                    this.addressList = data.result;


                }
            })
        },
        toDefault:function (addressId) {
            // alert("a");
            this.addressList.forEach((item,index)=>{

                if(item.addressId == addressId){
                    console.log("a");
                    item.isDefault = true;
                }else{
                    item.isDefault = false;
                }
            })
        }
    },
    computed:{
        limitAddress:function () {
            return this.addressList.slice(0,this.limit);
        }
    }

})
