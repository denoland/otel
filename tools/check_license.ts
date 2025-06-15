// Copyright 2024-2025 the Deno authors. All rights reserved. MIT license.

import { checkLicense } from "@kt3k/license-checker";

const CURRENT_YEAR = new Date().getFullYear();
const LICENSE =
  `// Copyright 2024-${CURRENT_YEAR} the Deno authors. All rights reserved. MIT license.`;

await checkLicense([{ config: [["**/*.ts", LICENSE]] }]);
