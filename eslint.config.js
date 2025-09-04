import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    // Rules para componentes Vue
    vue: true,
    // Rules para TypeScript
    typescript: true,
  }
})
.append({
  // Archivos a ignorar
  ignores: [
    '.nuxt/**',
    '.output/**',
    'dist/**',
    'node_modules/**',
    '*.config.js',
    '*.config.ts'
  ]
})
.append({
  // Configuraciones personalizadas
  rules: {
    // Personaliza reglas según tus preferencias
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off'
  }
})