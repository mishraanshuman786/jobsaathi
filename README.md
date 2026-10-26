# Create the three local databases
```
CREATE DATABASE jobsaathi_dev;
CREATE DATABASE jobsaathi_test;
CREATE DATABASE jobsaathi_prod;
\l
```

# Drizzle Setup

```
pnpm add drizzle-orm postgres dotenv
pnpm add -D drizzle-kit cross-env
```

drizzle.config.ts
```
import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: process.env.NODE_ENV === "test" ? ".env.test" : ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema",
  out: "./drizzle",
  dbCredentials: { url: process.env.DATABASE_URL! },
});
```

src/db/index.ts
```
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const g = globalThis as unknown as { pgClient?: ReturnType<typeof postgres> };

export const client = g.pgClient ?? postgres(process.env.DATABASE_URL!);
if (process.env.NODE_ENV !== "production") g.pgClient = client;

export const db = drizzle(client, { schema });
```

src/db/schema/jobs.ts
```
import { pgTable, uuid, text, integer, date, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const jobs = pgTable("jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  organisation: text("organisation").notNull(),
  sourceUrl: text("source_url").notNull(),
  vacancies: integer("vacancies"),
  lastDate: date("last_date"),
  hash: text("hash").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("jobs_hash_idx").on(t.hash)]);

export type NewJob = typeof jobs.$inferInsert;
```

src/db/schema/index.ts
```
export * from "./jobs";
```


# package.json scripts with their use:
```
pnpm db:generate        # creates the SQL migration in /drizzle
pnpm db:migrate         # applies it to jobsaathi_dev
pnpm db:migrate:test    # applies it to jobsaathi_test
pnpm db:studio          # check that the jobs table exists
```

# Install the test libraries
```
pnpm add -D vitest @vitejs/plugin-react vite-tsconfig-paths jsdom \
  @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

# next-themes library is nextjs
next-themes is a library used in Next.js to manage light mode, dark mode, and system-based theme switching in your application.

## How to install it?
```
pnpm add next-themes
```

## Configure it in nextjs
If your project uses the App Router (app/ directory), create a theme provider.

`app/providers.tsx`
```
"use client";
import {ThemeProvider} from "next-themes";

export function Providers({children}:{children:React.ReactNode}){
  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
     >
     {children}
     </ThemeProvider>
  )

}
```

Then wrap your application in `app/layout.tsx`:
```
import {Providers} from "./providers";
import "./globals.css";

export deafult function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en" supressHydrationWarning>
    <body>
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
```

`attribute="class"` means the library adds a `light` or `dark` class to the HTML element.

## Add a theme toggle button
Create a client component that lets the user switch between light and dark mode.

`components/ThemeToggle.tsx`
```
"use client";
import {useTheme} from "next-themes";

export default function ThemeToggle(){
  const {theme, setTheme}=useTheme();

  return (
    <button
      onClick={()=>
        setTheme(theme==="dark"?"light":"dark")
      }
    >
    Toggle Button
    </button>
  )
}

```

## How does it change your CSS?
In `globals.css`, define the styles for each theme.

```
body {
  background: white;
  color: #171717;
}

.dark body {
  background: #171717;
  color: white;
}
```

With Tailwind CSS, you can use classes like:
```
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
  Welcome to the dashboard
</div>
```