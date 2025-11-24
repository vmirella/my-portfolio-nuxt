export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Tipos permitidos para commits
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Corrección de bugs
        'docs', // Documentación
        'style', // Cambios de formato
        'refactor', // Refactorización
        'perf', // Mejoras de rendimiento
        'test', // Tests
        'chore', // Tareas de mantenimiento
        'ci', // Cambios en CI/CD
        'build', // Cambios en el sistema de build
        'revert', // Revertir commits
      ],
    ],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 3],
    'subject-case': [0],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
  },
}
