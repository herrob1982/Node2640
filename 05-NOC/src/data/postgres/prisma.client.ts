import { PrismaClient } from '../../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { envs } from '../../config/plugins/envs.plugin';

/**
 * Singleton instance de PrismaClient
 * Se crea una sola vez y se reutiliza en toda la aplicación
 */
const prismaClientSingleton = () => {
    return new PrismaClient({
        adapter: new PrismaPg({ connectionString: envs.POSTGRES_URL }),
    });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as { prisma: PrismaClientSingleton };

export const prisma = globalForPrisma.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
