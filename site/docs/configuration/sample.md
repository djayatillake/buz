---
tags:
  - configuration
  - sample
---

# Sample Configuration

```
version: 1.1

app:
  env: development
  mode: debug
  port: 8080
  trackerDomain: localhost
  health:
    enabled: true
    path: /health
  stats:
    enabled: true
    path: /stats

inputs:
  snowplow:
    enabled: true
    standardRoutesEnabled: true
    openRedirectsEnabled: true
    getPath: /plw/g
    postPath: /plw/p
    redirectPath: /plw/r
    anonymize:
      ip: false
      userId: false
  cloudevents:
    enabled: true
    postPath: /ce/p
    batchPostPath: /ce/bp
  generic:
    enabled: true
    postPath: /gen/p
    batchPostPath: /gen/bp
    contexts:
      rootKey: contexts
      schemaKey: schema
      dataKey: data
    payload:
      rootKey: data
      schemaKey: schema
      dataKey: data
  webhook:
    enabled: true
    path: /wb/hk
  relay:
    enabled: true
    path: /relay

schemaCache:
  schemaCacheBackend:
    type: fs
    path: ./schemas
  ttlSeconds: 300
  maxSizeBytes: 104857600 # 100mb -> 100 * 1024 * 1024
  purge:
    enabled: true
    path: /c/purge
  schemaEndpoints:
    enabled: true

sink:
  type: stdout
  produceTimeout: 3

middleware:
  timeout:
    enabled: false
    ms: 2
  rateLimiter:
    enabled: false
    period: H
    limit: 1
  cookie:
    enabled: true
    name: sp-nuid
    secure: false
    ttlDays: 365
    domain: localhost
    path: /
    sameSite: Lax
  cors:
    enabled: true
    allowOrigin:
      - "*"
    allowCredentials: true
    allowMethods:
      - POST
      - OPTIONS
      - GET
    maxAge: 86400
  requestLogger:
    enabled: true
  yeet:
    enabled: false

squawkBox:
  enabled: true
  cloudeventsPath: /sqwk/ce
  snowplowPath: /sqwk/sp
  genericPath: /sqwk/gen

tele:
  enabled: true
  heartbeatMs: 30000

```