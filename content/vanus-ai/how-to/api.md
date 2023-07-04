# use the API

## API Endpoint

```
POST https://app.ai.vanus.ai/api/v1/{application_id}
```

## Request Body

Content-Type: `application/json`

Body:

```json
{
    "prompt": "{message}",
    "stream": true
}
```

## Headers

- `Content-Type`: application/json
- `x-vanusai-model`: {model}
- `x-vanusai-sessionid`: {id}

### Header Definitions

- `x-vanusai-model`: This is the model being used for the interaction. It is related to the application. Options include `gpt-3.5-turbo`, `ernie-3.0-bot`, `gpt-4`.
- `x-vanusai-sessionid`: This is a randomly generated UUID. Different ids represent different dialogues.

## Parameters

- `{application_id}`: Replace with your application ID.
- `{message}`: Replace with the message text.
- `{model}`: Replace with the model name.
- `{id}`: Replace with a randomly generated UUID.

## Responses

The server responds with an event stream where each event is a JSON object representing the AI-generated response.

## Examples

       curl -i https://app.ai.vanus.ai/api/v1/{application_id} -d'{"prompt": "{message}", "stream": true}' -H"Content-Type:application/json" -H"x-vanusai-model:{model}" -H"x-vanusai-sessionid:{id}"

### Python

    import requests
    import json
    import uuid
    
    application_id = "your_application_id"
    model = "gpt-4"
    message = "your_message"
    
    headers = {
        "Content-Type": "application/json",
        "x-vanusai-model": model,
        "x-vanusai-sessionid": str(uuid.uuid4()),
    }
    
    data = {
        "prompt": message,
        "stream": True
    }
    
    response = requests.post(
        f"https://app.ai.vanus.ai/api/v1/{application_id}",
        headers=headers,
        data=json.dumps(data),
        stream=True
    )
    
    for line in response.iter_lines():
        if line:
            decoded_line = line.decode('utf-8')
            print(json.loads(decoded_line))

### Node.Js

    const axios = require('axios');
    const uuid = require('uuid');
    
    let application_id = "your_application_id";
    let model = "gpt-4";
    let message = "your_message";
    
    let headers = {
        "Content-Type": "application/json",
        "x-vanusai-model": model,
        "x-vanusai-sessionid": uuid.v4(),
    }
    
    let data = {
        "prompt": message,
        "stream": true
    }
    
    axios({
        method: 'post',
        url: `https://app.ai.vanus.ai/api/v1/${application_id}`,
        data: data,
        headers: headers,
        responseType: 'stream'
    })
    .then(function (response) {
        response.data.on('data', (chunk) => {
            console.log(JSON.parse(chunk.toString()));
        });
    })
    .catch(function (error) {
        console.log(error);
    });

## Status Codes

The API returns the following status codes:

- `200`: Successful request
- `400`: Bad request - the request could not be understood or was missing required parameters.
- `401`: Unauthorized - authentication failed or user does not have permissions for the requested operation.
- `403`: Forbidden - authentication succeeded but authenticated user does not have access to the requested resource.
- `404`: Not Found - resource could not be found.
- `500`: Internal Server Error - a generic error occurred on the server.



