export const totalPriceItems = order => {

    const countToppings = order.topping && order.topping.filter(item => item.checked).length;
    const priceToppings = (order.price * 0.1) * countToppings;

    return (order.price + priceToppings) * order.count;
}

export const formatCurrency = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});