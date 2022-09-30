# CloudEvents

业务应用中存在很多生产或消费事件的系统。这些生产和消费系统之间应该是松耦合的，可以独立地开发、部署和连接。CloudEvents 规范的目标是定义这些事件系统之间的互操作性。

CloudEvents 的核心规范定义了事件描述的通用格式，并以此提供服务、平台和系统之间的可操作性。除此以外，CloudEvents 还含概一组 [SDK](https://github.com/cloudevents/spec/blob/main/cloudevents/SDK.md)，和包括[订阅](https://github.com/cloudevents/spec/blob/main/subscriptions/spec.md)（Subscription）、[服务发现](https://github.com/cloudevents/spec/blob/main/discovery/spec.md)（Discovery）、[模式中心](https://github.com/cloudevents/spec/blob/main/schemaregistry/spec.md)（Schema Registry）在内的侧重于 Eventing 和 Messaging 模型的不同方面的规范。

Vanus是围绕着CloudEvents规范打造的，并且深度集成了CloudEvents的SDK。

## CloudEvent

![CloudEvent](images/cloudevent.jpg)

“[事件](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#event)”是对已经发生的事情和其背景环境的数据记录。因此，CloudEvent 中包含两种类型的信息：用于表示[已经发生的事情](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#occurrence)（Occurrence）的[事件数据](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#event-data)（Event Data），和用于提供背景信息的[环境](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#context)（Context）元数据。

### 环境属性

CloudEvent 中**必须**包括全部的必需环境属性，**可能**包括任意数量的可选环境属性和扩展环境属性。

#### 必需属性

<!-- markdownlint-disable MD033 -->
<dl>
  <dt>id</dt>
  <dd>标识该事件。</dd>
  <dt>source</dt>
  <dd>标识事件发生的环境。通常包括事件源的类型信息、发布该事件的组织信息、产生该事件的进程信息等。</dd>
  <dt>specversion</dt>
  <dd>事件所使用 CloudEvents 规范的版本。</dd>
  <dt>type</dt>
  <dd>引起已经发生的事情的事件类型。通常用于事件路由、可观察性、策略实施等。</dd>
</dl>
<!-- markdownlint-enable MD033 -->

#### 可选属性

<!-- markdownlint-disable MD033 -->
<dl>
  <dt>datacontenttype</dt>
  <dd><code>data</code>值的类型。该属性使<code>data</code>能够携带任何格式或编码的内容，而不是受事件的格式限制。</dd>
  <dt>dataschema</dt>
  <dd>标识<code>data</code>的模式。</dd>
  <dt>subject</dt>
  <dd>在已知生产者信息（由<code>source</code>标识）的基础上进一步指明事件的主题。</dd>
  <dt>time</dt>
  <dd>事件发生时刻的时间戳。</dd>
</dl>
<!-- markdownlint-enable MD033 -->

#### 扩展环境属性

CloudEvent 中**可能**包括任意数量的不同名的额外环境属性。这些属性被称为“扩展属性”。外部系统可以通过扩展属性给事件附加元数据。

有关扩展的使用和定义的更多信息，请参阅[CloudEvent属性扩展](https://github.com/cloudevents/spec/blob/main/cloudevents/primer.md#cloudevent-extension-attributes)。

### 事件数据

CloudEvent 中**可能**包括关于已经发生的事情的领域特定信息。若该信息存在，则会被封装到`data`中。

### 样例

以下是一个序列化为 JSON 格式的 CloudEvent 样例：

```json
{
    "specversion" : "1.0",
    "type" : "com.github.pull_request.opened",
    "source" : "https://github.com/cloudevents/spec/pull",
    "subject" : "123",
    "id" : "A234-1234-1234",
    "time" : "2018-04-05T17:31:00Z",
    "comexampleextension1" : "value",
    "comexampleothervalue" : 5,
    "datacontenttype" : "text/xml",
    "data" : "<much wow=\"xml\"/>"
}
```

## CloudEvents SDKs

CloudEvents 团队开发并维护着下列 SDK：

- [CSharp SDK](https://github.com/cloudevents/sdk-csharp)
- [Go SDK](https://github.com/cloudevents/sdk-go)
- [Java SDK](https://github.com/cloudevents/sdk-java)
- [JavaScript SDK](https://github.com/cloudevents/sdk-javascript)
- [PHP SDK](https://github.com/cloudevents/sdk-php)
- [PowerShell](https://github.com/cloudevents/sdk-powershell)
- [Python SDK](https://github.com/cloudevents/sdk-python)
- [Ruby SDK](https://github.com/cloudevents/sdk-ruby)
- [Rust SDK](https://github.com/cloudevents/sdk-rust)

如需更多信息，请访问 [CloudEvents 官网](https://cloudevents.io)。
