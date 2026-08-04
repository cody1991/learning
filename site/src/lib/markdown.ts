import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

/** Rewrite .md relative links to Learning Hub routes. */
export function rewriteMarkdownLinks(markdown: string, slug: string, base: string): string {
  const prefix = base.endsWith('/') ? base : `${base}/`;

  return markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (full, text: string, href: string) => {
    const trimmed = href.trim();
    if (
      /^(https?:|mailto:|tel:)/i.test(trimmed) ||
      trimmed.startsWith('#') ||
      trimmed.startsWith('/')
    ) {
      return full;
    }

    const [pathPart, hash = ''] = trimmed.split('#');
    const clean = pathPart.replace(/^\.\//, '');
    if (!clean.toLowerCase().endsWith('.md')) return full;

    const stem = clean.replace(/\.md$/i, '');
    const hashSuffix = hash ? `#${hash}` : '';
    if (stem.toLowerCase() === 'readme') {
      return `[${text}](${prefix}tracks/${slug}/${hashSuffix})`;
    }
    return `[${text}](${prefix}tracks/${slug}/${stem}/${hashSuffix})`;
  });
}

export function renderMarkdown(markdown: string, slug: string, base: string): string {
  const rewritten = rewriteMarkdownLinks(markdown, slug, base);
  return marked.parse(rewritten, { async: false }) as string;
}

export type CheckboxStats = {
  total: number;
  done: number;
};

export function countCheckboxes(markdown: string): CheckboxStats {
  const lines = markdown.split('\n');
  let total = 0;
  let done = 0;
  for (const line of lines) {
    const m = line.match(/^\s*[-*]\s+\[([ xX])\]\s+/);
    if (!m) continue;
    total += 1;
    if (m[1].toLowerCase() === 'x') done += 1;
  }
  return { total, done };
}
