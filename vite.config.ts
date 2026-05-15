import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Domínios ngrok comuns; prefixo `.` permite subdomínios (ex.: abc123.ngrok-free.app). */
const NGROK_ALLOWED_HOSTS = [
  '.ngrok-free.app',
  '.ngrok-free.dev',
  '.ngrok.io',
  '.ngrok.app',
] as const;

function isNgrokEnabled(): boolean {
  const raw = process.env.NGROK ?? process.env.VITE_NGROK;
  if (raw === undefined) return false;
  return ['1', 'true', 'yes', 'on'].includes(String(raw).toLowerCase());
}

export default defineConfig(({ mode }) => {
  const useNgrok = mode === 'ngrok' || isNgrokEnabled();

  return {
    plugins: [react()],
    server: useNgrok
      ? {
          host: true,
          strictPort: true,
          allowedHosts: [...NGROK_ALLOWED_HOSTS],
        }
      : {},
  };
});
