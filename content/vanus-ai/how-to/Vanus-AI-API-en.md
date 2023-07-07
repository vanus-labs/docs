# Vanus AI API Documentation

## API Endpoint

```
POST https://app.ai.vanus.ai/api/v1/{application_id}
```

## Request Body

Content-Type: `application/json`

Body:

```json
{
    "prompt": "hello",
    "stream": true,
    "no_search": false
}
```

- `prompt`: Message text sent
- `stream`: Whether to use streaming output, true means using streaming output, false means not using streaming output
- `no_search`: Whether to search the knowledge base, true means not to search the knowledge base, false means to search the knowledge base

## Headers

- `Content-Type`: application/json
- `x-vanusai-model`: {model}
- `x-vanusai-sessionid`: {id}

### Header Definitions

- `x-vanusai-model`: This is the model being used for the interaction. It is related to the application. Options include `gpt-3.5-turbo`, `ernie-3.0-bot`, `gpt-4`.
- `x-vanusai-sessionid`: This is a randomly generated UUID. Different ids represent different dialogues.

## Parameters

- `{application_id}`: Replace with your application ID.
- `{model}`: Replace with the model name.
- `{id}`: Replace with a randomly generated UUID.

## Responses

The server responds with an event stream where each event is a JSON object representing the AI-generated response.


## Examples

```bash
curl -i https://app.ai.vanus.ai/api/v1/{application_id} -d'{"prompt": "{message}", "stream": true, "no_search": false}' -H"Content-Type:application/json" -H"Accept:*/*" -H"x-vanusai-model:{model}" -H"x-vanusai-sessionid:{id}"
```


### Python Example

You will need the `requests` package which can be installed via `pip install requests`.

```python
import requests
import json
import uuid

application_id = "<your_application_id>"  # Replace with your Application ID
model = "<your_model>"  # Replace with your model, for example "gpt-3.5-turbo", "ernie-3.0-bot", "gpt-4"
message = "<your_prompt>"  # Replace with your prompt

headers = {
    "Content-Type": "application/json",
    "x-vanusai-model": model,
    "x-vanusai-sessionid": str(uuid.uuid4()),  # Generate a random UUID
}

data = {
    "prompt": message,
    "stream": True,
    "no_search": False
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
        if decoded_line.startswith('data:'):
            json_line = decoded_line[6:]
            print(json.loads(json_line))

```

### Node.js Example

You will need the `axios` and `uuid` packages for this. They can be installed with `npm install axios uuid`.

```javascript
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

let application_id = "<Your Application ID>";  // Replace with your Application ID
let model = "<Your Model>";  // Replace with your model, e.g., "gpt-3.5-turbo", "ernie-3.0-bot", "gpt-4"
let message = "<Your Message>";  // Replace with your prompt message

let headers = {
    "Content-Type": "application/json",
    "x-vanusai-model": model,
    "x-vanusai-sessionid": uuidv4(),  // Generates a random UUID
}

let data = {
    "prompt": message,
    "stream": true,
    "no_search": false,
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
        const lines = chunk.toString().split('\n');

        for (let line of lines) {
            if (line.startsWith('data: ')) {
                const jsonString = line.replace('data: ', '');
                console.log(JSON.parse(jsonString));
            }
        }
    });
})
.catch(function (error) {
    console.log(error);
});

```

## Status Codes

The API returns the following status codes:

- `200`: Successful request
- `400`: Bad request - the request could not be understood or was missing required parameters.
- `401`: Unauthorized - authentication failed or user does not have permissions for the requested operation.
- `403`: Forbidden - authentication succeeded but authenticated user does not have access to the requested resource.
- `404`: Not Found - resource could not be found.
- `500`: Internal Server Error - a generic error occurred on the server.