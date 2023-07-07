
# Vanus AI API Documentation

## API Endpoint

HTTP Method: `Post`

Copy the API URL from your App dashboard. The endpoint for each App is unique.

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

- `{model}`: Replace with the model name.
- `{id}`: Replace with a randomly generated UUID.

## Responses

The server responds with an event stream where each event is a JSON object representing the AI-generated response.

## Examples

```bash
curl -i <URL from App dashboard> -d'{"prompt": "{message}", "stream": true}' -H"Content-Type:application/json" -H"Accept:*/*" -H"x-vanusai-model:{model}" -H"x-vanusai-sessionid:{id}"
```

### Python Example

You will need the `requests` package which can be installed via `pip install requests`.

```python
import requests
import json
import uuid

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
    f"<URL from your App dashboard in API Access>",
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
    url: // <URL from your App dashboard in API Access>,
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


## Q&A

### Q1: What is the HTTP method for accessing the API?

A1: The HTTP method is `POST`.

### Q2: What is the structure of the request body?

A2: The request body should be a JSON object with the following structure:

```json
{
    "prompt": "hello",
    "stream": true,
    "no_search": false
}
```

### Q3: What headers are required in the request?

A3: The following headers are required:

- `Content-Type`: application/json
- `x-vanusai-model`: The model to use for the interaction (options include `gpt-3.5-turbo`, `ernie-3.0-bot`, `gpt-4`).
- `x-vanusai-sessionid`: A randomly generated UUID. Different ids represent different dialogues.

### Q4: How do I replace the parameters in the examples?

A4: The `{message}`, `{model}`, and `{id}` placeholders in the examples should be replaced with your message text, model name, and a randomly generated UUID, respectively.

### Q5: How are responses from the server structured?

A5: The server responds with an event stream where each event is a JSON object representing the AI-generated response.

### Q6: What status codes can the API return?

A6: The API can return the following status codes:

- `200`: Successful request
- `400`: Bad request - the request could not be understood or was missing required parameters.
- `401`: Unauthorized - authentication failed or user does not have permissions for the requested operation.
- `403`: Forbidden - authentication succeeded but authenticated user does not have access to the requested resource.
- `404`: Not Found - resource could not be found.
- `500`: Internal Server Error - a generic error occurred on the server.

### Q7: How can I use this API with Python?

A7: Here is a basic example using Python's `requests` library.

[See Python Example in the documentation above]

Remember to replace the placeholders with your application's specific details.

### Q8: How can I use this API with Node.js?

A8: Here is a basic example using Node.js with the `axios` library.

[See Node.js Example in the documentation above]

Remember to replace the placeholders with your application's specific details.

### Q9: What is the purpose of the `stream` parameter in the request body?

A9: The `stream` parameter, when set to `True`, specifies that the server should respond with a stream of events, each event being a JSON object representing the AI-generated response. This allows you to get responses as they are available instead of waiting for all responses to be generated before they are sent.

### Q10: What does the `x-vanusai-model` header specify?

A10: The `x-vanusai-model` header specifies the model that will be used for the interaction. The options include `gpt-3.5-turbo`, `ernie-3.0-bot`, `gpt-4`, and these are related to the application.

### Q11: What does the `x-vanusai-sessionid` header specify?

A11: The `x-vanusai-sessionid` is a randomly generated UUID. Different ids represent different dialogues. This is used to maintain the state of a conversation with the AI model across multiple requests.
