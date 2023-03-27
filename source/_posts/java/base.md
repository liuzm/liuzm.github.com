title: java基础
date: 2023-03-24 20:39:44
categories:
- Java
tags:
- java基础
language: zh-CN
---

## 基础介绍
### JVM
```bash
    
java -Xmx5440M -Xms5440M \
  -XX:MaxMetaspaceSize=512M -XX:MetaspaceSize=512M \
  -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:+ParallelRefProcEnabled \
  -Dspring.profiles.active=prod \
  -jar /app/lib/app.jar
  
```
案例如上: 部署环境的一个jvm配置信息。

### JDK && JRE

### 内存

### 数据类型

### 数据结构

### 线程
