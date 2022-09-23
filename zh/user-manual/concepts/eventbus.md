# Eventbus

Eventbus就像一组管道，用于接收和分发事件。

所有写入Eventbus的事件都会被持久化存储。你可以向Eventbus中写入任意多的事件，直到占满全部存储空间。你可以在任意时刻创建一个[Subscription](subscription.md)来消费Eventbus中的事件。写入Eventbus的事件可以反复读取，每个关联到相同Eventbus上的Subscription中的Target都可以收到全量的事件。

## 事件保留策略

你可以为Eventbus配置事件保留策略，所有不符合保留策略的事件会被标记为过期，并在适当时候自动清除。当存储容量受限时，这对于Vanus提供不间断服务是必须的。

每个Eventbus具有独立的保留策略。默认的事件保留策略是3天后过期。
