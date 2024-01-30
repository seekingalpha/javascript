try {
  const husky = await import('husky');
  husky.default();
} catch (e) {
  if (e.code !== 'ERR_MODULE_NOT_FOUND') {
    throw e;
  }
}
