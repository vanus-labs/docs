# Output Events of Webhook Source using Auth0

The Webhook Source supports various types of [Webhook events](https://auth0.com/docs/logs/references/webhooks).

The Webhook Source generates [CloudEvents](https://docs.vanus.ai/reference/cloudevents) for each type of Auth0 event.

## Sample Event

### Login Failure

#### Event f - Failed login

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T07:48:53.089Z",
        "details": {
          "error": {
            "message": "Invalid email or username"
          },

          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "f",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

#### Event fc - Failed connector login

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T07:48:53.089Z",
        "details": {
          "error": {
            "message": "Your account has been blocked"
          },
          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "fc",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

#### Event fco - Origin is not in the application's Allowed Origins list

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T07:48:53.089Z",
        "details": {
          "error": {
            "message": "Invalid email or username"
          },
          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "fco",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

#### Event fcoa - Failed cross-origin authentication

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T07:48:53.089Z",
        "details": {
          "error": {
            "message": "Invalid email or username"
          },
          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "fcoa",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

#### Event fens - Failed native social login

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T07:48:53.089Z",
        "details": {
          "error": {
            "message": "Invalid email or username"
          },
          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "fens",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

#### Event fp - Incorrect password

```json
{
  "specversion": "1.0",
  "id": "7d919b38-12af-4b61-a1cc-8f00881a44cc",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T08:23:10.242354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T08:22:53.089Z",
        "details": {
          "error": {
            "message": "Incorrect password"
          },
          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "fp",
        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

#### Event fu - Invalid email or username

```json
{
  "specversion": "1.0",
  "id": "ace872fa-21f8-40ce-8e99-fce6fd452a98",
  "source": "vanus-http-source",
  "type": "naive-http-request",
  "datacontenttype": "application/json",
  "time": "2023-03-28T07:49:08.892354632Z",
  "data": {
    "body": {
      "data": {
        "client_id": "mJY4yH5YOTCL6MCOqqJWkhlbkDsYduD4",
        "client_name": "Vanus saas",
        "connection": "github",
        "connection_id": "con_wD4ce37QOMEwweTrPJy4",
        "date": "2023-03-28T07:48:53.089Z",
        "details": {
          "error": {
            "message": "Invalid email or username"
          },
          "hostname": "website.com",
          "ip": "100.223.435",
          "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15"
        },
        "hostname": "website.com",
        "ip": "100.223.435",
        "log_id": "90020230380748500000688856420223372030000699600000159894",
        "type": "fu",
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
        "user_id": "github|32452425",
        "user_name": "user.email@outlook.com"
      },
      "log_id": "9002234235243544000748588850000720396059000696000012233894"
    },
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate",
      "Connection": "close",
      "Content-Length": "720",
      "Content-Type": "application/json",
      "Host": "user7eb96d032c53a69.app.vtxhub.com",
      "User-Agent": "auth0-logstream/1.0",
      "X-Forwarded-For": "10.1.1.1",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "method": "POST",
    "path": "/",
    "query_args": {}
  },
  "xvhttpremoteip": "172.17.0.1",
  "xvhttpremoteaddr": "172.17.0.1:57734",
  "xvhttpbodyisjson": "true"
}
```

### Login Notification

### Login Success

---

### Logout Failure

### Logout Success

---

### Signup Failure

### Signup Success

---

### Silent Authentication Failure

### Silent Authentication Success

---

### Token Exchange Failure

### Token Exchange Success
