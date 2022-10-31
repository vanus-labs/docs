# CloudEvents

The goal of the CloudEvents specification is to define the interoperability of event systems that allow services to
produce or consume events, where the producer and consumer are loosely coupled during development, deployed
independently, and later can be connected to create new applications.

CloudEvents, at its core, is a specification for describing event data in common formats to provide interoperability
across services, platforms and systems. And beyond the core specification, CloudEvents also contains
[SDKs](https://github.com/cloudevents/spec/blob/main/cloudevents/SDK.md) and other specifications for other aspects of
Eventing/Messaging, such as [Subscription](https://github.com/cloudevents/spec/blob/main/subscriptions/spec.md),
[Discovery](https://github.com/cloudevents/spec/blob/main/discovery/spec.md),
[Schema Registry](https://github.com/cloudevents/spec/blob/main/schemaregistry/spec.md), etc.

Vanus is built around the CloudEvents specifications and integrated with CloudEvents SDKs.

## CloudEvent

![CloudEvent](images/cloudevent.jpg)

An "[event](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#event)" is a data record expressing an
occurrence and its context. So, the CloudEvent will contain two types of information: the
[Event Data](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#event-data) representing the
[Occurrence](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#occurrence) and
[Context](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md#context) metadata providing contextual
information about the Occurrence.

### Context Attributes

A CloudEvent **MUST** include context attributes designated as REQUIRED, **MAY** include one or more OPTIONAL context
attributes and **MAY** include one or more extension context attributes.

#### REQUIRED Attributes

<dl>
  <dt>id</dt>
  <dd>Identifies the event.</dd>
  <dt>source</dt>
  <dd>
    Identifies the context in which an event happened. Often this will include information such as the type of the event
    source, the organization publishing the event or the process that produced the event.
  </dd>
  <dt>specversion</dt>
  <dd>The version of the CloudEvents specification which the event uses.</dd>
  <dt>type</dt>
  <dd>
    This attribute contains a value describing the type of event related to the originating occurrence. Often this
    attribute is used for routing, observability, policy enforcement, etc.
  </dd>
</dl>

#### OPTIONAL Attributes

<dl>
  <dt>datacontenttype</dt>
  <dd>
    Content type of <code>data</code> value. This attribute enables <code>data</code> to carry any type of
    content, whereby format and encoding might differ from that of the chosen event format.
  </dd>
  <dt>dataschema</dt>
  <dd>Identifies the schema that <code>data</code> adheres to.</dd>
  <dt>subject</dt>
  <dd>
    This describes the subject of the event in the context of the event producer (identified by <code>source</code>).
  </dd>
  <dt>time</dt>
  <dd>Timestamp of when the occurrence happened.</dd>
</dl>

#### Extension Context Attributes

A CloudEvent **MAY** include any number of additional context attributes with distinct names, known as "extension
attributes". They allow external systems to attach metadata to an event.

See [CloudEvent Attributes Extensions](https://github.com/cloudevents/spec/blob/main/cloudevents/primer.md#cloudevent-extension-attributes)
for additional information concerning the use and definition of extensions.

### Event Data

A CloudEvent **MAY** include domain-specific information about the occurrence. When present, this information will be
encapsulated within `data`.

### Example

The following example shows a CloudEvent serialized as JSON:

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

The CloudEvents team is committed to supporting and maintaining the following SDKs:

- [CSharp SDK](https://github.com/cloudevents/sdk-csharp)
- [Go SDK](https://github.com/cloudevents/sdk-go)
- [Java SDK](https://github.com/cloudevents/sdk-java)
- [JavaScript SDK](https://github.com/cloudevents/sdk-javascript)
- [PHP SDK](https://github.com/cloudevents/sdk-php)
- [PowerShell](https://github.com/cloudevents/sdk-powershell)
- [Python SDK](https://github.com/cloudevents/sdk-python)
- [Ruby SDK](https://github.com/cloudevents/sdk-ruby)
- [Rust SDK](https://github.com/cloudevents/sdk-rust)

See [CloudEvents' website](https://cloudevents.io) for more details.
