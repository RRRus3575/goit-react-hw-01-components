export const Switch = event => {
  switch (event) {
    case '.docx':
      return '#4FC4F7';
    case '.pdf':
      return '#A43CF3';
    case '.mp3':
      return '#E64C66';
    case '.psd':
      return '#1EB9C5';
    default:
      return '#ffffff';
  }
};
