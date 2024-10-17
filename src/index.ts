// Copyright 2024-2024 the Deno authors. All rights reserved. MIT license.

import { context } from "npm:@opentelemetry/api@1";
import { Resource } from "npm:@opentelemetry/resources@1";
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION,
} from "npm:@opentelemetry/semantic-conventions@1";
import {
  BasicTracerProvider,
  SimpleSpanProcessor,
} from "npm:@opentelemetry/sdk-trace-base@1";

/**
 * Register `Deno.tracing` with the OpenTelemetry library.
 */
export function register() {
  context.setGlobalContextManager(
    // @ts-ignore Deno.tracing is not typed yet
    new Deno.tracing.ContextManager(),
  );

  const provider = new BasicTracerProvider({
    resource: new Resource({
      [ATTR_SERVICE_NAME]: "deno",
      [ATTR_SERVICE_VERSION]: Deno.version.deno,
    }),
  });

  // @ts-ignore Deno.tracing is not typed yet
  const exporter = new Deno.tracing.SpanExporter();
  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  provider.register();
}
