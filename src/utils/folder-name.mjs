export const folderName = () =>
  new Date()
    .toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: '2-digit',
    })
    .replaceAll(/\//gi, '-')
    .split('-')
    .reverse()
    .join('-');
