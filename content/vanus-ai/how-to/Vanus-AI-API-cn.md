# Vanus AI API文档

## API接口

```
POST https://app.ai.vanus.ai/api/v1/{application_id}
```

## 请求体

内容类型：`application/json`

请求体：

```json
{
    "prompt": "hello",
    "stream": true,
    "no_search": false
}
```

- `prompt`: 发送的消息文本
- `stream`: 是否使用流式输出，true表示使用流式输出，false表示不使用流式输出
- `no_search`: 是否搜索知识库，true表示不搜索知识库，false表示搜索知识库

## 请求头

- `Content-Type`: application/json
- `x-vanusai-model`: {model}
- `x-vanusai-sessionid`: {id}

### 请求头定义

- `x-vanusai-model`: 此为与应用相关的模型，可选项包括`gpt-3.5-turbo`, `ernie-3.0-bot`, `gpt-4`。
- `x-vanusai-sessionid`: 此为随机生成的UUID，不同的id代表不同的对话。

## 参数

- `{application_id}`: 使用您的应用ID替换。
- `{model}`: 用模型名称替换。
- `{id}`: 用随机生成的UUID替换。

## 响应

服务器以event stream的形式响应，其中每一个事件都是一个代表AI生成的响应的JSON对象。

## 示例

```bash
curl -i https://app.ai.vanus.ai/api/v1/{application_id} -d'{"prompt": "{message}", "stream": true, "no_search": false}' -H"Content-Type:application/json" -H"Accept:*/*" -H"x-vanusai-model:{model}" -H"x-vanusai-sessionid:{id}"
```

### Python 示例

你将需要 `requests` 包。可以通过 `pip install requests` 安装。

```python
import requests
import json
import uuid

application_id = "<你的应用 ID>";  # 用你的应用 ID 替换
model = "<你的模型>";  # 用你的模型替换，例如 "gpt-3.5-turbo", "ernie-3.0-bot", "gpt-4"
message = "<你的信息>";  # 用你的提示信息替换

headers = {
    "Content-Type": "application/json",
    "x-vanusai-model": model,
    "x-vanusai-sessionid": str(uuid.uuid4()),  # 生成一个随机的 UUID
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

### Node.js 示例

你将需要 `axios` 和 `uuid` 包。可以通过 `npm install axios uuid` 安装。

```javascript
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

let application_id = "<你的应用 ID>";  // 用你的应用 ID 替换
let model = "<你的模型>";  // 用你的模型替换，例如 "gpt-3.5-turbo", "ernie-3.0-bot", "gpt-4"
let message = "<你的信息>";  // 用你的提示信息替换

let headers = {
    "Content-Type": "application/json",
    "x-vanusai-model": model,
    "x-vanusai-sessionid": uuidv4(),  // 生成一个随机的 UUID
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

## 状态码

API返回以下状态码：

- `200`: 请求成功
- `400`: 错误的请求 - 请求无法理解或缺少必需的参数。
- `401`: 未授权 - 认证失败或用户没有请求操作的权限。
- `403`: 禁止 - 认证成功但认证用户无权访问所请求的资源。
- `404`: 未找到 - 无法找到资源。
- `500`: 服务器内部错误 - 服务器上发生一般错误。







