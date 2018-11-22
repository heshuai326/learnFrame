import io from 'socket.io-client'
const socket = io('ws://localhost:4000');


const app = new Vue({
    el: '#app',
    data: {
        message:'',
        messages: []
    },
    created: function () {
      this._init()  
    },
    methods: {
        send() {
            socket.emit('sendMsg', {
                msg: this.message
            })
        },
        _init(){
            socket.on('connect', ()=>{
                this.messages.push('连接成功')
                
                socket.on('receiveMsg', (data)=>{
                    this.messages.push(data.msg)
                })
            })
        }
    }
  })

