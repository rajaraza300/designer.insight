import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const projects = [
  ['digital-aura', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/ff15a6242869579.Y3JvcCwxMzg4LDEwODYsMCww.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/75d5dd242869579.697628109ae4c.png'],
  ['technical-aluminium', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/935269222098985.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fa4c75222098985.67e03ed320365.png'],
  ['empiric-marketing', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/7d3147222093711.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/b4abe2222093711.67e027375850f.png'],
  ['arena-marketing', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/b95138222093123.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/01bb27222093123.67e0249b7846c.png'],
  ['am-marketing', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/778234222091917.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/462d9d222091917.67e01f5dbd436.png'],
  ['aaa-square', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/786110222087643.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1f0b62222087643.67e00b25b7b53.png'],
  ['altura-builders', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/f6e10e221428659.Y3JvcCwzNDEzLDI2NzAsMjk1LDA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/03c1e2221428659.67d4099a5c24d.png'],
  ['round-cube', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/434061222086261.Y3JvcCwxMzg4LDEwODYsNTQsMA.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/45aabd222086261.67e002a345e9a.png'],
  ['property-bank', 'https://mir-s3-cdn-cf.behance.net/projects/original_webp/f70e6f189115051.Y3JvcCw1MDAwLDM5MTAsMCww.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a0309d189115051.65a6ba9ea3395.png'],
];

const outputDir = join(process.cwd(), 'public', 'portfolio', 'brand-work');
mkdirSync(outputDir, { recursive: true });

const download = (url, output, width) => {
  const temp = `${output}.download`;
  execFileSync('curl', ['-L', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '60', '-o', temp, url], { stdio: 'inherit' });
  execFileSync('convert', [temp, '-auto-orient', '-strip', '-resize', `${width}x${width}>`, '-quality', '80', output], { stdio: 'inherit' });
  rmSync(temp, { force: true });
};

for (const [slug, coverUrl, identityUrl] of projects) {
  console.log(`Downloading ${slug}`);
  download(coverUrl, join(outputDir, `${slug}-cover.webp`), 960);
  download(identityUrl, join(outputDir, `${slug}-identity.webp`), 1280);
}

console.log(`Saved ${projects.length * 2} optimized portfolio images to ${outputDir}`);
