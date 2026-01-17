"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { requestSchema, RequestFormData } from "@/lib/formSchema";
import { useState } from "react";

export default function RequestEvaluationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = async (data: RequestFormData) => {
    if (data.company) return; // honeypot

    try {
      await emailjs.send(
        process.env.SERVICEID!,
        process.env.TEMPLATEID!,
        data,
        process.env.PUBLICKEY!,
      );

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4 mt-24"
    >
      <div className="space-y-1">
        <h2 className="h4 !text-[--primary-color]">
          Aanvraag voor een evaluatie
        </h2>
        <p className="p">
          Vul onderstaande gegevens in. Ons team zal uw aanvraag analyseren en
          contact met u opnemen.
        </p>
      </div>

      {/* Dienst */}
      <div>
        <label>Type dienst</label>
        <select {...register("service_type")} className="input">
          <option value="">Selecteer</option>
          <option value="Nieuw dak">Nieuw dak</option>
          <option value="Renovatie">Renovatie</option>
          <option value="Isolatie">Isolatie</option>
          <option value="Plat dak">Plat dak</option>
          <option value="Gevel">Gevel</option>
        </select>
        {errors.service_type && <p className="error">Verplicht veld</p>}
      </div>

      {/* Beschrijving */}
      <div>
        <label>Projectbeschrijving</label>
        <textarea
          {...register("description")}
          rows={4}
          className="input resize-none"
          placeholder="Bijv.: daklekkage, verouderde isolatie, geschatte oppervlakte in m²…"
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}
      </div>

      {/* Technisch grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label>Stad / Regio</label>
          <input {...register("location")} className="input" />
        </div>

        <div>
          <label>Geschatte afmeting (m²)</label>
          <input {...register("dimension")} className="input" />
        </div>
      </div>

      {/* Urgentie */}
      <div>
        <label>Urgentie</label>
        <select {...register("urgency")} className="input">
          <option value="Geen urgentie">Geen urgentie</option>
          <option value="1 maand">Binnen 1 maand</option>
          <option value="2 weken">Binnen 2 weken</option>
          <option value="Dringend">Dringend</option>
        </select>
      </div>

      {/* Contact */}
      <div className="border-t border-gray-200 pt-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-900">Contactgegevens</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label>Naam</label>
            <input {...register("name")} className="input" />
          </div>

          <div>
            <label>E-mail</label>
            <input {...register("email")} className="input" />
          </div>
        </div>

        <div>
          <label>Telefoon</label>
          <input {...register("phone")} className="input" />
        </div>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        {...register("company")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {/* CTA */}
      <div className="pt-2">
        <button disabled={isSubmitting} className="btn w-full">
          {isSubmitting ? "Verzenden…" : "Aanvraag indienen"}
        </button>
      </div>

      {/* Feedback */}
      {status === "success" && (
        <p className="success">
          Uw aanvraag is verzonden. Ons team neemt binnenkort contact met u op.
        </p>
      )}

      {status === "error" && (
        <p className="error">
          Er is een fout opgetreden bij het verzenden. Probeer opnieuw.
        </p>
      )}
    </form>
  );
}
