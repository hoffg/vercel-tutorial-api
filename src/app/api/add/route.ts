// Caminho: src/app/api/add/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS test ( message TEXT );`;
    await sql`INSERT INTO test (message) VALUES ('Funcionou!');`;
    return NextResponse.json({ result: "Mensagem 'Funcionou!' adicionada ao banco." }, { status: 200 });
  } catch (error) {
    // Adiciona uma verificação para garantir que 'error' tenha uma propriedade 'message'
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
