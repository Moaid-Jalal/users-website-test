export const SUPPORTED_LANGUAGES = ['en', 'fr', 'tr'] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];