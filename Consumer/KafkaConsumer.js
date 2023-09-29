const { Kafka } = require('kafkajs');
const { configurationKafka, aditionalConfiguration } = require('./Configuration');

const kafka = new Kafka( configurationKafka );

const consumer = kafka.consumer({groupId : aditionalConfiguration.groupId});

const execute = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: aditionalConfiguration.topic, fromBegining : aditionalConfiguration.fromBegining});
    await consumer.run({
        eachMessage : async ( { topic, partition, message }) => {
            // console.log( topic, partition, message)
            console.log('holassss', message.value.toString())
        }
    });
}

execute().catch( error => console.log(error))