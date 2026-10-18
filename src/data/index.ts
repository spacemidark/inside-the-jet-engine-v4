import catalog from './catalog.json';
import glossary from './glossary.json';
import type { EngineComponent, GlossaryTerm, Lang } from '../types';
import type { ComponentType } from 'react';

export const components = catalog.components as EngineComponent[];
export const glossaryTerms = glossary as GlossaryTerm[];

// Vite imports new MDX files automatically; each article section is independently editable.
const pages = import.meta.glob('../../content/**/*.mdx', { eager: true }) as Record<
  string,
  { default: ComponentType<{ components?: Record<string, ComponentType<any>> }> }
>;

export function loadSection(componentId: string, sectionId: string, lang: Lang) {
  return pages[`../../content/${componentId}/${sectionId}.${lang}.mdx`]?.default ?? null;
}
