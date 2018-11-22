var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  input MessageInput{
    content: String
    author: String
  }
  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation{
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

// 如果Message拥有复杂字段，我们把它们放在这个对象里面
class Message{
    constructor(id, {content, author}) {
        this.id = id
        this.content = content
        this.author = author
    }
}

// 映射username到content
let fakeDatabase = {}

var root = { 
    getMessage: function({id}) {
        if(!fakeDatabase[id]) {
            throw new Error('no message exist with id' + id)
        }
            console.log(new Message(id, fakeDatabase[id]))
        return new Message(id, fakeDatabase[id])
    },
    createMessage: function({input}) {
        const id = require('crypto').randomBytes(10).toString('hex')
        fakeDatabase[id] = input
        return new Message(id, input)
    },
    updateMessage: function({id, input}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id' +  id)
        }

        fakeDatabase[id]  = input
        return new Message(id, input)
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(2000, () => console.log('Now browse to localhost:2000/graphql'));