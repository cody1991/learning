import fs from 'node:fs';
import path from 'node:path';
import { discoverTracks, listTrackDocs, REPO_ROOT, type TrackMeta } from './tracks';
import { countCheckboxes, type CheckboxStats } from './markdown';

export type TrackProgress = {
  track: TrackMeta;
  files: { file: string; docId: string; label: string; stats: CheckboxStats }[];
  total: number;
  done: number;
};

export function collectProgress(): TrackProgress[] {
  return discoverTracks().map((track) => {
    const files = listTrackDocs(track.slug)
      .map((doc) => {
        const raw = fs.readFileSync(path.join(REPO_ROOT, track.slug, doc.file), 'utf8');
        const stats = countCheckboxes(raw);
        return { file: doc.file, docId: doc.id, label: doc.label, stats };
      })
      .filter((f) => f.stats.total > 0);

    const total = files.reduce((s, f) => s + f.stats.total, 0);
    const done = files.reduce((s, f) => s + f.stats.done, 0);
    return { track, files, total, done };
  });
}
