import {PrismaClient} from '@prisma/client';

declare global{
    var prisma: PrismaClient | undefined;
}
export const db=globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV!=='production'){
    globalThis.prisma=db;
}


// This code prevents the "Too many connections" problem by reusing a single Prisma client instance during development in Next.js.

// That’s why it’s usually saved in a lib/db.ts or lib/prisma.ts file.