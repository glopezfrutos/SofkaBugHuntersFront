
export const formatTextToArray = (text: string): string[] => {
    if (!text.length) return []
    return text.split(" ").filter(value => value.trim().length)
}