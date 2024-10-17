# @deno/otel

[![JSR](https://jsr.io/badges/@deno/otel)](https://jsr.io/@deno/otel)

Registers the `Deno.tracing` API as an exporter with the OpenTelemetry library.

# Try it

```ts
import { register } from "jsr:@deno/otel";

register();
```

Or, more simply:

```ts
import "jsr:@deno/otel/register";
```
