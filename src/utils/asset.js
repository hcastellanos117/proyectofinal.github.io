export const asset = (path) => {
  const basePath = import.meta.env.BASE_URL || '/';
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}${cleanPath}`;
};