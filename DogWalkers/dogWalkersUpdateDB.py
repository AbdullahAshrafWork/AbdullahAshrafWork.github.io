import json
import boto3

def lambda_handler(event, context):
   
    dynamodb = boto3.client('dynamodb')
    
    document = json.loads(event["body"])
   
    try:
        dynamodb.put_item(TableName="dogWalkers-DB", 
            Item={"id": {"S": document['id']},
            "name":{"S": document['name']},
            "age":{"S": document['age']},
            "area":{"S": document['area']},
        })
    
    except Exception as error:
        return{
            'body' : json.dumps(error)
        }
        
    return {

        'statusCode': 200,
        'headers': { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type,Authorization",
            "Access-Control-Allow-Methods": "OPTIONS,POST"
            
        },
        'body':json.dumps("DB successfully updated")
        
    }