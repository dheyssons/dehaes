"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { requestSchema, RequestFormData } from "@/lib/formSchema";
import { useState } from "react";
import { useTranslations } from "next-intl";

import Notification from "@/components/notification";

export default function RequestEvaluationForm() {
  const t = useTranslations("requestForm");

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [step, setStep] = useState<1 | 2>(1);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = async (data: RequestFormData) => {
    if (data.company) return;

    try {
      await emailjs.send(
        process.env.SERVICEID!,
        process.env.TEMPLATEID!,
        data,
        process.env.PUBLICKEY!,
      );

      if (typeof window !== "undefined" && "gtag" in window) {
        // @ts-ignore
        window.gtag("event", "qualify_lead", {
          method: "request_evaluation_form",
          service_type: data.service_type,
          location: data.location,
        });
      }

      setStatus("success");
      setShowNotification(true);
      reset();
      setStep(1);
    } catch {
      setStatus("error");
    }
  };

  const handleNextStep = async () => {
    const isValid = await trigger([
      "service_type",
      "description",
      "location",
      "dimension",
      "urgency",
    ]);

    if (isValid) {
      setStep(2);
    }
  };

  const [showNotification, setShowNotification] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl rounded-md border border-gray-200 bg-white p-6 shadow-sm space-y-6"
    >
      {/* HEADER */}
      <div className="space-y-1">
        <h2 className="h4 !text-[--primary-color]">{t("title")}</h2>
        <p className="p">{t("intro")}</p>
      </div>

      {/* STEPS CONTAINER (HEIGHT STABLE) */}
      <div className="min-h-[460px] flex flex-col justify-between">
        {/* STEP 1 — PROJECT INFO */}
        {step === 1 && (
          <>
            <div className="space-y-4">
              {/* SERVICE */}
              <div>
                <label>{t("fields.serviceType.label")}</label>
                <select {...register("service_type")} className="input">
                  <option value="">
                    {t("fields.serviceType.placeholder")}
                  </option>
                  <option value="newRoof">
                    {t("fields.serviceType.options.newRoof")}
                  </option>
                  <option value="renovation">
                    {t("fields.serviceType.options.renovation")}
                  </option>
                  <option value="isolation">
                    {t("fields.serviceType.options.isolation")}
                  </option>
                  <option value="flatRoof">
                    {t("fields.serviceType.options.flatRoof")}
                  </option>
                  <option value="facade">
                    {t("fields.serviceType.options.facade")}
                  </option>
                </select>
                {errors.service_type && (
                  <p className="error">{t("fields.serviceType.error")}</p>
                )}
              </div>

              {/* DESCRIPTION */}
              <div>
                <label>{t("fields.description.label")}</label>
                <textarea
                  {...register("description")}
                  rows={4}
                  className="input resize-none"
                  placeholder={t("fields.description.placeholder")}
                />
                {errors.description && (
                  <p className="error">{errors.description.message}</p>
                )}
              </div>

              {/* TECH INFO */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label>{t("fields.location.label")}</label>
                  <input {...register("location")} className="input" />
                </div>

                <div>
                  <label>{t("fields.dimension.label")}</label>
                  <input {...register("dimension")} className="input" />
                </div>
              </div>

              {/* URGENCY */}
              <div>
                <label>{t("fields.urgency.label")}</label>
                <select {...register("urgency")} className="input">
                  <option value="none">
                    {t("fields.urgency.options.none")}
                  </option>
                  <option value="oneMonth">
                    {t("fields.urgency.options.oneMonth")}
                  </option>
                  <option value="twoWeeks">
                    {t("fields.urgency.options.twoWeeks")}
                  </option>
                  <option value="urgent">
                    {t("fields.urgency.options.urgent")}
                  </option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNextStep}
              className="btn w-full mt-6"
            >
              {t("cta.next")}
            </button>
          </>
        )}

        {/* STEP 2 — CONTACT */}
        {step === 2 && (
          <>
            <div className="space-y-4">
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {t("fields.contact.title")}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label>{t("fields.contact.name")}</label>
                  <input {...register("name")} className="input" />
                </div>

                <div>
                  <label>{t("fields.contact.email")}</label>
                  <input {...register("email")} className="input" />
                </div>
              </div>

              <div>
                <label>{t("fields.contact.phone")}</label>
                <input {...register("phone")} className="input" />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary w-1/3"
              >
                {t("cta.back")}
              </button>

              <button disabled={isSubmitting} className="btn w-2/3">
                {isSubmitting ? t("cta.submitting") : t("cta.submit")}
              </button>
            </div>
          </>
        )}
      </div>

      {/* HONEYPOT */}
      <input
        type="text"
        {...register("company")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {/* FEEDBACK */}
      {showNotification && status === "success" && (
        <Notification
          message={t("feedback.success")}
          onClose={() => setShowNotification(false)}
        />
      )}

      {status === "error" && <p className="error">{t("feedback.error")}</p>}
    </form>
  );
}
