import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import {config} from "dotenv";

const testEnv= config({path:".env.test"}).parsed ?? {};
if(!testEnv.DATABASE_URL?.endsWith("_test")){
    throw new Error("DATABASE_URL in .env.test must point to jobsaathi_test databse!");
}

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    env: testEnv,
    projects: [
      {
        extends: true,
        test: {
          name: "unit-frontend",
          environment: "jsdom",
          include: ["tests/unit/frontend/**/*.test.{ts,tsx}"],
          setupFiles: ["./tests/setup/setup-ui.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "unit-backend",
          environment: "node",
          include: ["tests/unit/backend/**/*.test.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          environment: "node",
          include: ["tests/integration/**/*.test.ts"],
          globalSetup: ["./tests/setup/global-setup.ts"],
          setupFiles: ["./tests/setup/setup-integration.ts"],
          fileParallelism: false,
        },
      },
    ],
  },
});