// Copyright 2024-2025 the Deno authors. All rights reserved. MIT license.

import { context } from "npm:@opentelemetry/api@1";
import {
  BasicTracerProvider,
  SimpleSpanProcessor,
} from "npm:@opentelemetry/sdk-trace-base@1";

// @ts-ignore Deno.telemetry is not typed yet
const telemetry = Deno.telemetry ?? Deno.tracing;

/**
 * Register `Deno.telemetry` with the OpenTelemetry library.
 */
export function register() {
  context.setGlobalContextManager(
    new telemetry.ContextManager() ?? telemetry.ContextManager(),
  );

  const provider = new BasicTracerProvider({});

  // @ts-ignore Deno.tracing is not typed yet
  const exporter = new telemetry.SpanExporter();
  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

  provider.register();
}
