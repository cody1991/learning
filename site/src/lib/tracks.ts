import fs from 'node:fs';
import path from 'node:path';

/** Repo root (learning/). Build/dev always run with cwd = site/. */
export const REPO_ROOT = path.resolve(process.cwd(), '..');

const SKIP = new Set([
  'site',
  'docs',
  'labs',
  '.cursor',
  '.github',
  'node_modules',
  '.git',
  '.vscode',
]);

export type TrackMeta = {
  slug: string;
  title: string;
  summary: string;
  firstCourse: string;
  order: number;
};

export type TrackDoc = {
  /** URL segment; empty string = README / track home */
  id: string;
  /** Filename without path */
  file: string;
  label: string;
};

function labelFromFile(file: string): string {
  if (file.toLowerCase() === 'readme.md') return '概览';
  const stem = file.replace(/\.md$/i, '');
  return stem
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function discoverTracks(): TrackMeta[] {
  const entries = fs.readdirSync(REPO_ROOT, { withFileTypes: true });
  const tracks: TrackMeta[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (SKIP.has(entry.name) || entry.name.startsWith('.')) continue;

    const dir = path.join(REPO_ROOT, entry.name);
    const readme = path.join(dir, 'README.md');
    const metaPath = path.join(dir, 'track.json');
    if (!fs.existsSync(readme) || !fs.existsSync(metaPath)) continue;

    const raw = JSON.parse(fs.readFileSync(metaPath, 'utf8')) as Omit<TrackMeta, 'slug'>;
    tracks.push({
      slug: entry.name,
      title: raw.title,
      summary: raw.summary,
      firstCourse: raw.firstCourse,
      order: Number(raw.order) || 99,
    });
  }

  return tracks.sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}

export function getTrack(slug: string): TrackMeta | undefined {
  return discoverTracks().find((t) => t.slug === slug);
}

export function listTrackDocs(slug: string): TrackDoc[] {
  const dir = path.join(REPO_ROOT, slug);
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith('.md'))
    .sort((a, b) => {
      const aReadme = a.toLowerCase() === 'readme.md';
      const bReadme = b.toLowerCase() === 'readme.md';
      if (aReadme) return -1;
      if (bReadme) return 1;
      return a.localeCompare(b);
    });

  return files.map((file) => {
    const isReadme = file.toLowerCase() === 'readme.md';
    return {
      id: isReadme ? '' : file.replace(/\.md$/i, ''),
      file,
      label: labelFromFile(file),
    };
  });
}

export function readTrackMarkdown(slug: string, docId: string): string | null {
  const docs = listTrackDocs(slug);
  const doc = docs.find((d) => d.id === docId);
  if (!doc) return null;
  return fs.readFileSync(path.join(REPO_ROOT, slug, doc.file), 'utf8');
}
