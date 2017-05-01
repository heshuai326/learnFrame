var vm = new Vue({
    el:"#app",
    data(){
        return {
            title:"hello wolrd",
            productList:[],
            isCheck:false,
            checkAll:false,
            totalMoney:0,
            isShow:false,
            removeIndex:0
        }
    },
    mounted:function () {
        //保证组件已经成功挂载
        this.$nextTick(function () {
            //发请求
            this.getData();
        })
    },
    filters:{
        money:function (val) {
            return "￥ "+val.toFixed(2);
        }
    },
    computed:{
        totalPrice:function () {
            this.totalMoney = 0;
            this.productList.forEach((item,index)=>{
                if(item.checked){
                    this.totalMoney += item.productQuentity * item.productPrice;
                }
            })
            return this.totalMoney;
        }
    },
    methods:{
        getData:function () {
            //get请求
            var _this = this;
            // this.$http.get('data/cart.json',{}).then(function (res) {
            //     _this.productList = res.body.result.productList;
            // });
            this.$http.get('data/cart.json',{}).then((res)=>{
                this.productList = res.body.result.productList;
                console.log(this.productList);
            })
        },
        changeNum:function (type,index) {
            if(type == "add"){
                this.productList[index].productQuentity++;
            }else{
                if(this.productList[index].productQuentity<=1){
                    this.productList[index].productQuentity=1;
                }else{
                    this.productList[index].productQuentity--;
                }

            }
        },
        selected:function (item) {
            // alert(typeof item.checked);
            if((typeof(item.checked)) == "undefined"){
                // item.checked = true;
                this.$set(item,'checked',true);
            }else{
                item.checked = !item.checked;
            }

        },
        checkedAll:function (type) {
            // alert("a");
            this.checkAll = type;
            this.productList.forEach((item,index)=>{
                if((typeof(item.checked)) == "undefined"){
                    // item.checked = true;
                    this.$set(item,'checked',type);
                }else{
                    item.checked = type;
                }
            })
        },
        popItem:function (item) {
            // alert(this.productList.indexOf(item));
            this.removeIndex = this.productList.indexOf(item);
            this.isShow = true;
        },
        delItem:function () {
            this.productList.splice(this.removeIndex,1);
            this.isShow = false;
        }
    }

})