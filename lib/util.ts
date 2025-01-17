// output -> dd/mm/yyyy
export function getFormattedDate(dateStr: string) {
    const date = new Date(dateStr)

    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(date)
}
