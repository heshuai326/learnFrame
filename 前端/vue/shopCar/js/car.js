
new Vue({
     el:'#app',
     data:{
         productList:[],
         isShow:false,
         index:'',
         isSelect:false,
         totalMoney:0
     },
     mounted:function() {
        //  组件挂载时请求数据
         this.$http.get('./data/cart.json').then(res => {
            this.productList = res.body.result.productList;
        }, e => {
           console.log(e);
        });
     },
     filters: {
       money:function(val)  {
           return '￥'+val.toFixed(2) +'元';
       }
     },
      computed: {
        totalPrice:function(){
            let that = this;
            this.totalMoney = 0;
              this.productList.forEach(function(item) {
                //    选中的时候，计算总金额
                if(item.checked){
                    that.totalMoney += item.productPrice*item.productQuentity;
                }
            });
            return '￥'+this.totalMoney+'元';
        }
    },
    methods: {
        // 计算总金额
        // calTotal:function(){
        //     this.productList.forEach(function(item) {
        //         //    选中的时候，计算总金额
        //         if(item.checked){
        //             this.totalMoney += item.productPrice*item.productQuentity;
        //         }
        //     });
        // },
        change:function (action,index) {
            if(action=='add'){
            //    添加操作
                this.productList[index].productQuentity++;
            }
            if(action=='sub'){
            //    减少操作
                this.productList[index].productQuentity--;
                if( this.productList[index].productQuentity<=0){
                    this.productList[index].productQuentity = 0;
                }
            }
        },
        //删除方法
        remove:function (index) {
            this.isShow = true;
            this.index = index;
        },
        isRemove:function (action) {
              if(action=='yes'){
                  this.productList.splice(this.index,1);
                  this.isShow = false;
              }
              if(action=='no'){
                  this.isShow = false;
              }

        },
        select:function (item) {
            console.log(item.checked);
            if(typeof(item.checked)=='undefined'){
                this.$set(item,'checked',true);
            }else {
                item.checked=!item.checked;
            }
            let count = 0;
            for(let i = 0;i<this.productList.length;i++ ){
               if(this.productList[i].checked ==true ){
                   count++;
               }
               if(count==this.productList.length){
                   this.isSelect = true;
               }

            }
        },
        selectAll:function (type) {
            this.isSelect=!this.isSelect
            if(type=='all'){
                for(let i = 0;i<this.productList.length;i++ ){
                    this.productList[i].checked = true
                }
            }
            if(type=='cancel'){
                for(let i = 0;i<this.productList.length;i++ ){
                    this.productList[i].checked = false
                }
            }


        }
    }
})
