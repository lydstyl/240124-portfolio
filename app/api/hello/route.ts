// import prisma from '../lib/prisma'

import prisma from '@/lib/prisma'

export async function GET() {
  //   const res = await fetch('https://data.mongodb-api.com/...', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY
  //     }
  //   })
  //   const data = await res.json()

  const fromPrisma = await prisma.skills.findMany()

  return Response.json({ hello: fromPrisma })
  //   return Response.json({ data })
}
