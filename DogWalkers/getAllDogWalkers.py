import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
        
    dynamodb = boto3.resource('dynamodb')
    
    
    table = dynamodb.Table('dogWalkers-DB')
    
    param = event.get('queryStringParameters')
    area = param['param1']

    response = table.scan(
        FilterExpression = Attr('area').eq(area)
    )
    
   
    
    results = []
    items = response['Items']
    for pets in items:
        results.append(pets)
        
    
    return {
        'headers': { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type,Authorization",
            "Access-Control-Allow-Methods": "GET,OPTIONS,POST"
            
        },
        'body': json.dumps(results)
    }
        