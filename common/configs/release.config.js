const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/changelog',
    [
      '@semantic-release/release-notes-generator',
      { releaseRules: { type: 'ci', release: 'patch' } },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} [skip-ci] ${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

module.exports = config;
