# Eventbus

Eventbus就像一组管道，用于接收和分发事件。

所有写入 Eventbus 的事件都会被持久化存储。你可以向 Eventbus 中写入任意多的事件，直到占满全部存储空间。你可以在任意时刻创建一个 [subscription](subscription.md) 来消费 Eventbus 中的事件。写入 Eventbus 的事件可以被反复读取，每个关联到相同 Eventbus 的 subscription 对应的 Sink 都可以收到该 Eventbus 所有的事件。

## 事件保留策略

你可以为 Eventbus 配置事件保留策略，所有不符合保留策略的事件会被标记为过期，并在适当时候自动清除。当存储容量受限时，上述策略对于 Vanus 提供不间断服务是必须的。

每个 Eventbus 都具有独立的保留策略。默认的事件保留策略是3天后过期。
