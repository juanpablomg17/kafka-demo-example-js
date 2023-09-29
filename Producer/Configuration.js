const configurationKafka = {
    brokers: ['testkafka.com:8080'],
    clientId: 'test_producer'
}

const aditionalConfiguration = {
    topic : 'test_topic',
    groupId: 'test_producer',
    fromBegining: true,
}
module.exports = { configurationKafka , aditionalConfiguration }

