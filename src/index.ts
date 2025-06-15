// Copyright 2024-2024 the Deno authors. All rights reserved. MIT license.

import { context } from "npm:@opentelemetry/api@1";
import {
  BasicTracerProvider,
  SimpleSpanProcessor,
} from "npm:@opentelemetry/sdk-trace-base@1";

const telemetry = Deno.telemetry;

/**
 * Register `Deno.telemetry` with the OpenTelemetry library.
 */
export function register() {
  context.setGlobalContextManager(telemetry.contextManager());

  new BasicTracerProvider({
    spanProcessors: [new SimpleSpanProcessor(telemetry.tracerProvider())],
  }).register();
}
