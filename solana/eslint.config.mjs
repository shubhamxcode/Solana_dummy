import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use compatibility layer for Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom override to turn off the rule
  {
    rules: {
      "@next/next/no-img-element": "off", // 👈 this disables the warning
    },
  },
];

export default eslintConfig;
