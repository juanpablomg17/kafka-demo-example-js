const { Kafka } = require('kafkajs');
const { aditionalConfiguration, configurationKafka } = require('./Configuration');

const kafka = new Kafka({ brokers: configurationKafka.brokers, clientId: configurationKafka.clientId });
const producer = kafka.producer();

const getMessage = () => {
    let message =  {
        "key": "testKey",
    }
    value = JSON.stringify(message);
    let listSend = [];
    let item = { key: 'testKey', value}
    listSend.push(item);
    return listSend;
}

const sendMessage = () => {
    return producer.send({topic: aditionalConfiguration.topic, messages: getMessage()})
    .then(console.log)
    .catch(error => console.log(error))
}

const execute = async () => {
    await producer.connect();
    setInterval (sendMessage , 3000);
    
}

execute().catch(error => console.log(error));