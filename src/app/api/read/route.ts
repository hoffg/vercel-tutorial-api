// Caminho: src/app/api/read/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * from test;`;
    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    // Adiciona uma verificação para garantir que 'error' tenha uma propriedade 'message'
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
