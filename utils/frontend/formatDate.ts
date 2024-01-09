
export function formatDate(dateString: string) {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options as Intl.DateTimeFormatOptions);
  }