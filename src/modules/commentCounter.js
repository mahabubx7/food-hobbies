export default async (comment, header) => {
  if (comment.length === 0) header.innerHTML = 'Comments (0)';
  else {
    header.innerHTML = `Comments (${comment.length})`;
  }
};
