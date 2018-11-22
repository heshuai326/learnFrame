'use strict'
module.exports = {
    header :{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    },
    api:{
        base:'http://rapapi.org/mockjs/17240/',
        create:'api/create',
        up:'api/up',
        signup:'api/u/signup',
        verify:'api/u/verify'
    }
}