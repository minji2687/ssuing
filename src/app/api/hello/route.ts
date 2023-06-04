import { NextResponse } from "next/server";
import connection from "../../../../utils/db";

export async function GET(req: any, res: any) {
  const query = "SELECT * FROM user";

  const response = await new Promise((resolve, reject) => {
    connection.query(query, (error: any, results: any) => {
      if (error) {
        new Response(JSON.stringify({ error: "Failed to fetch users" }));
      } else {
        resolve(results);
      }
    });
  });
  return new Response(JSON.stringify({ data: response }));
}

export async function POST(request: Request) {
  const res = await request.json();

  const { username, email, password } = res;

  const query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
  const response = await new Promise((resolve, reject) =>
    connection.query(
      query,
      [username, email, password],
      (error: any, results: any) => {
        if (error) {
          console.error("Error creating user:", error);
          return res.status(500).json({ error: "Failed to create user" });
        } else {
          resolve({ id: results.insertId });
        }
      }
    )
  );

  return new Response(JSON.stringify({ data: response }));
}
