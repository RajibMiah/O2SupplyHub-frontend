import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory equivalent of __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'src'), // Alias '@' points to 'src/' folder
         '@redux': path.resolve(__dirname, 'src/redux'),
         '@components': path.resolve(__dirname, 'src/components'),
         '@pages': path.resolve(__dirname, 'src/pages'),
         '@hooks': path.resolve(__dirname, 'src/hooks'),
         '@context': path.resolve(__dirname, 'src/context'),
         '@styles': path.resolve(__dirname, 'src/styles'),
         '@assets': path.resolve(__dirname, 'src/assets'),
      },
   },
});
