export default function createWindowandRedirect(url) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}