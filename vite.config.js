import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/main.ts',
      name: '@easylogic/mime',
    }
  },  
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },    
    })
  ]
});