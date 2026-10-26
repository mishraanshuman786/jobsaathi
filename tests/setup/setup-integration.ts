// empties all tables before each test
import {beforeEach, afterAll} from "vitest";
import {sql} from "drizzle-orm";
import {db, client} from "@/db";

beforeEach(async ()=>{
   const rows=await db.execute<{tablename: string}>(
    sql`select tablename from pg_tables where schemaname='public'`
   );

   const names=rows.map((row)=>`"${row.tablename}"`).join(", ");
   if(names) await db.execute(sql.raw(`TRUNCATE ${names} RESTART IDENTITY CASCADE`));

});

afterAll(async ()=> await client.end());