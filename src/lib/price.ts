export const formatPrice = (
    amount: number,
    currency: string = "MXN",
    includeCurrency: boolean = false
): string => {
    const formatted = new Intl.NumberFormat("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
    }).format(amount)

    return includeCurrency
        ? `${currency} $${formatted}`
        : `${formatted} `
}