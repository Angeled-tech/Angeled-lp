import { features } from "../config/features";

const WHATSAPP_LEAD_URL =
  "https://wa.me/5511939305353?text=" +
  encodeURIComponent(
    "Olá! Quero entrar na lista de lançamento do Angeled e ser avisado quando estiver disponível.",
  );

export function ctaPrimaryAction() {
  if (features.leadCapture) {
    return;
  }

  window.open(WHATSAPP_LEAD_URL, "_blank", "noopener,noreferrer");
}

export { WHATSAPP_LEAD_URL };
