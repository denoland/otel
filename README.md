# @deno/otel

[![JSR](https://jsr.io/badges/@<scope>/<package>)](https://jsr.io/@<scope>/<package>)

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
