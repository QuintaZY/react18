import {Fragment, useState} from 'react'
import Meals from "./components/Meals/Meals.jsx";
import CartContext from "./store/cart-context.js";
import FilterMeals from "./components/FilterMeals/FilterMeals.jsx";

const MEALS_DATA = [{
    id: '1', title: '芝士汉堡', desc: '100% 牛肉饼配上融化的芝士和新鲜蔬菜。', price: 12, img: '/img/meals/1.png'
}, {id: '2', title: '薯条', desc: '用新鲜土豆制成的金黄酥脆薯条。', price: 8, img: '/img/meals/2.png'}, {
    id: '3', title: '可乐', desc: '清爽的可口可乐，解渴首选。', price: 6, img: '/img/meals/3.png'
}, {id: '4', title: '鸡块', desc: '多汁的鸡块，外皮酥脆。', price: 10, img: '/img/meals/4.png'}, {
    id: '5', title: '蔬菜沙拉', desc: '新鲜的混合蔬菜沙拉，搭配多种蔬菜。', price: 9, img: '/img/meals/5.png'
}, {
    id: '6', title: '意大利肉酱面', desc: '经典的意大利面，配上浓郁的肉酱。', price: 15, img: '/img/meals/6.png'
}, {id: '7', title: '烤鸡三明治', desc: '烤鸡胸肉配上生菜和番茄。', price: 11, img: '/img/meals/7.png'},];

const App = () => {
    const [meals, setMeals] = useState(MEALS_DATA);

    // 创建一个state 用于存储购物车的数据
    const [cartData, setCartData] = useState({
        items: [], totalAmount: 0, totalPrice: 0
    });
    // 向购物车添加商品
    const addItem = (meal) => {
        // meal 要添加的商品
        // 对购物车进行复制
        const newCart = {...cartData};
        // 商品已经存在的时候呢
        if (newCart.items.indexOf(meal) === -1) {
            newCart.items.push(meal);
            meal.amount = 1;
        } else {
            meal.amount += 1;
        }
        // 计算总价
        newCart.totalPrice += meal.price;
        // 计算总数量
        newCart.totalAmount += 1;

        // 更新购物车
        setCartData(newCart);
    }
    // 减少商品的数量
    const removeItem = (meal) => {
        const newCart = {...cartData};
        // 找到商品的索引
        meal.amount -= 1;
        if (meal.amount === 0) {
            newCart.items = newCart.items.filter(item => item.id !== meal.id);
        }
        // 计算总价
        newCart.totalPrice -= meal.price;
        // 计算总数量
        newCart.totalAmount -= 1;
        // 更新购物车
        setCartData(newCart);
    }
    return (<div>
        <CartContext.Provider value={{...cartData, addItem, removeItem}}>
            <FilterMeals></FilterMeals>
            <Meals mealsData={meals}></Meals>
        </CartContext.Provider>
    </div>)
}

export default App