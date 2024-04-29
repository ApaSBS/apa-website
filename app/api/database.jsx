const { Client } = require('pg');

// Codifique sua senha para que ela possa ser incluída em uma URL
const password = encodeURIComponent(process.env.SUPABASE_PASSWORD);

// Sua string de conexão
const connectionString = `postgres://postgres.lpffliggephvshqyszop:${password}@aws-0-sa-east-1.pooler.supabase.com:5432/postgres`;


// Crie um cliente PostgreSQL
const client = new Client({
  connectionString: connectionString
});

client.connect()

export default client;
