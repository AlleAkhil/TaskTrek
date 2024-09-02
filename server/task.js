import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    UpdateCommand,
    PutCommand,
    DynamoDBDocumentClient,
    ScanCommand,
    DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from 'crypto';

// Ensure the region matches where your DynamoDB table is hosted
const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client);

export const fetchTasks = async () => {
    const command = new ScanCommand({
        ExpressionAttributeNames: { "#name": "name" },
        ProjectionExpression: "id, #name, completed",
        TableName: "Tasks",
    });

    const response = await docClient.send(command);
    return response;
};

export const createTasks = async ({ name, completed }) => {
    const uid = crypto.randomUUID();
    const command = new PutCommand({
        TableName: "Tasks",
        Item: {
            id: uid,
            name,
            completed,
        },
    });
    await docClient.send(command);
    return { id: uid, name, completed };  // Return the created task or response as needed
};

export const updateTasks = async ({ id, name, completed }) => {
    const command = new UpdateCommand({
        TableName: "Tasks",
        Key: {
            id,
        },
        ExpressionAttributeNames: {
            "#name": "name",
        },
        UpdateExpression: "set #name = :n, completed = :c",
        ExpressionAttributeValues: {
            ":n": name,
            ":c": completed,
        },
        ReturnValues: "ALL_NEW",
    });

    const response = await docClient.send(command);
    return response;
};

export const deleteTasks = async (id) => {
    const command = new DeleteCommand({
        TableName: "Tasks",
        Key: {
            id,
        },
    });

    const response = await docClient.send(command);
    return response;
};
