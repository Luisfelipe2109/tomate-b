import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nhiyhqwivxlbmrizbqcw.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaXlocXdpdnhsYm1yaXpicWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyNzE4ODcsImV4cCI6MjEwNTg0Nzg4N30.V6sjFl2BZm2p8x2wnxG8gWGXS-1c9b_omKalH8zO3rc";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { apoderado, correo, celular, cadete, edad, pregunta } = data;

    if (!apoderado || !correo || !celular || !cadete || !edad || !pregunta) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/contactos`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        apoderado: String(apoderado).trim(),
        correo: String(correo).trim(),
        celular: String(celular).trim(),
        cadete: String(cadete).trim(),
        edad: parseInt(edad, 10),
        pregunta: String(pregunta).trim()
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from Supabase:", errorText);
      return NextResponse.json(
        { error: "Error al registrar en la base de datos." },
        { status: 500 }
      );
    }

    const saved = await response.json();
    return NextResponse.json({ success: true, data: saved }, { status: 201 });
  } catch (err: any) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
