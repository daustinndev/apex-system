export function formatNumberMoney(ammount) {
    return new Intl.NumberFormat("ES-PE", {
      style: 'currency',
      currency: 'PEN',
    }).format(ammount)
  }