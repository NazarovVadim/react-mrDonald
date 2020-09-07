export const totalPriceItems = order => {

    const countToppings = order.topping && order.topping.filter(item => item.checked).length;
    const priceToppings = (order.price * 0.1) * countToppings;

    return (order.price + priceToppings) * order.count;
}

export const formatCurrency = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const projection = rules => {
    const keys = Object.keys(rules);

    return obj => keys.reduce((newObj, key) => {
        newObj[key] = rules[key].reduce((value, fn, i) => (i ? fn(value) : obj[fn]), null);
        return newObj;
    }, {})
}

