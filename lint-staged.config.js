module.exports = {
  '{lambdas,shared}/**/*.{ts,tsx}': [files => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  files => `nx affected:test --files=${files.join(',')}`
  ],
  '{lambdas,shared}/**/*.{js,ts,jsx,tsx,json}': [
    files => `nx affected:lint --files=${files.join(',')}`,
    files => `nx format:write --files=${files.join(',')}`,
  ],
};