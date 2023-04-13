---
title: 聊聊各种ID
date: 2023-04-13 11:52:54
categories:
- ID
tags:
- 技术梳理
---
在各个系统中都会存在一个比较特殊的字段或者属性，那就是ID。你会发现它会贯穿整个系统，或在整个系统中占有很大的一个比重。

<!-- more -->
## 述论
    
### Mysql & PostgreSQL 的主键ID
1. mysql主键。默认指定一个ID字段来作为主键，并且自增。
2. PostgreSQL利用SEQUENCE来指定ID字段来做自增。

### Hbase的rowkey
```text
    RowKey唯一标识一行记录:
    1. RowKey长度原则
    2. 唯一原则
    3. 排序原则
    4. 散列原则
```

### elasticsearch的docId
1. 自动生成
2. 手动生成

### rocketMQ & kafka 的msgId
1. rocketMQ
```text
  rocketMQ在数据落盘时（内存或者磁盘）会生成msgId.
```
2. Kafka
```text
  
```