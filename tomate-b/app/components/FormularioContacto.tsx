"use client";

import { useState } from "react";

type Campo = {
  name: string;
  label: string;
  tipo: "text" | "email" | "tel" | "number" | "textarea";
  ancho?: "completo";
  placeholder: string;
};

const CAMPOS: Campo[] = [
  { name: "apoderado", label: "Nombre del apoderado", tipo: "text", placeholder: "Ej. Karen Jara" },
  { name: "correo", label: "Correo electrónico", tipo: "email", placeholder: "apoderado@correo.cl" },
  { name: "celular", label: "Celular", tipo: "tel", placeholder: "+56 9 1234 5678" },
  { name: "cadete", label: "Nombre del cadete", tipo: "text", placeholder: "Ej. Santiago Jara" },
  { name: "edad", label: "Edad del cadete (12 a 17 años)", tipo: "number", placeholder: "Edad cumplida este año" },
  { name: "pregunta", label: "Pregunta o consulta", tipo: "textarea", ancho: "completo", placeholder: "Escribe aquí tus dudas sobre horarios, matrícula o becas..." },
];

export default function FormularioContacto() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      apoderado: formData.get("apoderado"),
      correo: formData.get("correo"),
      celular: formData.get("celular"),
      cadete: formData.get("cadete"),
      edad: formData.get("edad"),
      pregunta: formData.get("pregunta"),
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "No se pudo registrar la postulación.");
      }

      setSuccess(true);
      form.reset();
    } catch (err: any) {
      setError(err.message || "Error al conectar con la base de datos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-8">
      {success && (
        <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-center text-sm font-semibold text-green-800 shadow-sm">
          ⚽ ¡Postulación recibida y registrada con éxito en el sistema! Te contactaremos al correo y celular indicados.
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-center text-sm font-semibold text-red-800 shadow-sm">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        {CAMPOS.map((c) => (
          <div key={c.name} className={c.ancho === "completo" ? "sm:col-span-2" : undefined}>
            <label htmlFor={c.name} className="mb-1.5 block text-sm font-semibold text-ink">
              {c.label}
            </label>
            {c.tipo === "textarea" ? (
              <textarea
                id={c.name}
                name={c.name}
                rows={4}
                required
                placeholder={c.placeholder}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            ) : (
              <input
                id={c.name}
                name={c.name}
                type={c.tipo}
                min={c.tipo === "number" ? 12 : undefined}
                max={c.tipo === "number" ? 17 : undefined}
                required
                placeholder={c.placeholder}
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            )}
          </div>
        ))}
        <div className="sm:col-span-2">
          <button type="submit" disabled={loading} className="btn btn-bloque">
            {loading ? "Registrando postulación..." : "Postular a la prueba"}
          </button>
          <p className="mt-3 text-center text-sm text-muted">
            O escríbenos a admisiones@eltomatemecanico.cl
          </p>
        </div>
      </form>
    </div>
  );
}
