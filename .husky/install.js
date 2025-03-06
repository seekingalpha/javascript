try {
  // eslint-disable-next-line import/dynamic-import-chunkname
  const husky = await import('husky');
  husky.default();
} catch (err) {
  if (err.code !== 'ERR_MODULE_NOT_FOUND') {
    throw err;
  }
}
