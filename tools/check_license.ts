// Copyright 2024-2024 the Deno authors. All rights reserved. MIT license.

import { walk } from "jsr:@std/fs@^0.221.0";

const CHECK = Deno.args.includes("--check");
const CURRENT_YEAR = new Date().getFullYear();
const COPYRIGHT =
  `// Copyright 2024-${CURRENT_YEAR} the Deno authors. All rights reserved. MIT license.\n`;

async function checkLicense(path: string) {
  const content = await Deno.readTextFile(path);
  if (content.startsWith(COPYRIGHT)) return;
  if (CHECK) {
    throw new Error(
      `Missing copyright header: ${path}`,
    );
  } else {
    await Deno.writeTextFile(path, COPYRIGHT + content);
  }
}

for await (
  const { path } of walk(new URL("../", import.meta.url), {
    exts: [".ts"],
    includeDirs: false,
    skip: [/vendor/],
  })
) {
  checkLicense(path);
}
