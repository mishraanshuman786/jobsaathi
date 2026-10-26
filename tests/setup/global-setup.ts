// applies the migrations to the test DB once per run
import postgres from "postgres";
import {drizzle} from "drizzle-orm/postgres-js";
import {migrate} from "drizzle-orm/postgres-js/migrator";

export default async function setup(){
    const client=postgres(process.env.DATABASE_URL!,{max:1});
    await migrate(drizzle(client),{migrationsFolder:"./drizzle"});
    await client.end();
}