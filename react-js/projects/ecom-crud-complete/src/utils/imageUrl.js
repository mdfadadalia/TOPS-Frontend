// When an admin replaces a category/product image, the backend usually
// keeps the same file name/URL. The browser then happily serves the old
// cached bytes for that URL even though the file on disk changed, which
// makes a successful update look like "the image didn't save". Appending
// a version query param (derived from the record's own updatedAt/version
// field, when the API provides one) forces a fresh fetch only when the
// record actually changed, without breaking caching the rest of the time.
export const withCacheBust = (url, version) => {
  if (!url || typeof url !== "string") return url;
  if (url.startsWith("data:") || url.startsWith("blob:")) return url;
  if (!version) return url;
  const v = encodeURIComponent(String(version));
  return url.includes("?") ? `${url}&v=${v}` : `${url}?v=${v}`;
};
