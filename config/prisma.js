// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// module.exports = prisma;

// config/prisma.js
const { PrismaClient } = require('@prisma/client');

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = prisma;
