export function getPages(totalPages, currentPage) {
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            i === currentPage ||
            i === currentPage - 1 ||
            i === currentPage + 1
        ) {
            pages.push(i)
        } else if (
            i === currentPage - 2 ||
            i === currentPage + 2
        ) {
            pages.push("...")
        }
    }

    return [...new Set(pages)]
}