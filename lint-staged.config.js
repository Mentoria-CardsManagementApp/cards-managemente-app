module.exports = {
  '{backend,frontend}/**/*.{ts,tsx}': [files => {
    return `npx nx affected --target=typecheck --files=${files.join(',')}`;
  },
  files => `npx nx affected:test --files=${files.join(',')}`
  ],
  '{backend,frontend}/**/*.{js,ts,jsx,tsx,json}': [
    files => `npx nx affected:lint --files=${files.join(',')}`,
    files => `npx nx format:write --files=${files.join(',')}`,
  ],
};
