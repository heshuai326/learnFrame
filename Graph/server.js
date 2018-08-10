var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String,
    random: Float,!,
    rollThreeDice: [Int],
    rollDice(numDice: Int!, numSides: Int): [Int],
  }
`);

var root = { 
    quoteOfTheDay: () => {
        return Math.random() <  0.5 ? 'Take it easy':  'Salbation lies within'
    },
    random: () => {
        return Math.random()
    },
    rollThreeDice: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6 ))
    },
    rollDice: function({numDice, numSides}) {
        const output = []
        for (let i = 0; i< numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)))
        }
        return output
    }
 };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(2000, () => console.log('Now browse to localhost:2000/graphql'));