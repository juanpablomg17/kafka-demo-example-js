const configurationKafka = {
    brokers: ['testkafka.com:8080'],
    clientId: 'test'
}

const aditionalConfiguration = {
    topic : 'test_topic',
    groupId: 'test',
    fromBegining: true
}
module.exports = { configurationKafka , aditionalConfiguration }

