#!/usr/bin/env node
/**
 * sync-updates.mjs
 * Called by git post-commit hooks in Knito and Idabook.
 * Prepends the latest commit to updates.json in NotlandDesign.
 *
 * Usage:
 *   node sync-updates.mjs <app-id>
 *   e.g. node sync-updates.mjs knito
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const appId = process.argv[2];
if (!appId) {
  console.error('Usage: node sync-updates.mjs <app-id>');
  process.exit(1);
}

// Resolve path to updates.json relative to this script
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const updatesPath = path.join(__dirname, '..', 'src', 'data', 'updates.json');

// Get latest commit info from the calling repo (cwd = app repo)
const message = execSync('git log -1 --format=%s').toString().trim();
const rawDate = execSync('git log -1 --format=%ci').toString().trim();
const date = rawDate.slice(0, 10); // YYYY-MM-DD

// Skip merge commits and trivial messages
const skip = [
  /^merge pull request/i,
  /^merge branch/i,
];
if (skip.some(r => r.test(message))) {
  console.log(`[sync-updates] Skipping merge commit: "${message}"`);
  process.exit(0);
}

// Read, update, write
const updates = JSON.parse(readFileSync(updatesPath, 'utf-8'));
if (!Array.isArray(updates[appId])) {
  updates[appId] = [];
}

// Avoid duplicate entries
const alreadyExists = updates[appId].some(u => u.date === date && u.message === message);
if (!alreadyExists) {
  updates[appId].unshift({ date, message });
  writeFileSync(updatesPath, JSON.stringify(updates, null, 2) + '\n', 'utf-8');
  console.log(`[sync-updates] Added update for "${appId}": ${date} — ${message}`);
} else {
  console.log(`[sync-updates] Update already exists, skipping.`);
}
