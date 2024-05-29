import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import products from "../api/product.json"
import { useEffect, useContext } from 'react';
import { Appstate } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = () => {
    const useAppState = useContext(Appstate);

    useEffect(() => {
        const f1 = () => {
            useAppState.setData([...products.map((item) => {
                return {
                    ...item,
                    'quantity': 1
                }
            })])
        }
        f1()
    }, [])

    // notify when information successfull store in databases... 
    const notify = (msg) => toast(msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
    });
    
    const increment = (element) => {
        if (element['quantity'] >= element['stock']) {
            notify(`only ${element['quantity']} products are avilable`)
            return
        }
        element['quantity'] = element['quantity'] + 1;

        useAppState.setData([...useAppState.data])
    }

    const decrement = (element) => {
        if (element['quantity'] <= 1) {
            notify(`You can't add 0 product`)
            return
        }
        element['quantity'] = element['quantity'] - 1;

        useAppState.setData([...useAppState.data])
    }

    // get product from localStorage
    const getProduct = () => {
        return JSON.parse(localStorage.getItem('products'))
    }



    // add to cart
    const addToCart = ({ id, discount_price: price, quantity }) => {
        const productInfo = {
            id,
            price,
            quantity
        }
        // calculate price depends on quantity (if quantity increase price increase)
        productInfo.price = price * quantity

        let localStorageProduct = getProduct();
        if (localStorageProduct) {
            const exsitingProducts = localStorageProduct.find(currEle => currEle.id === id);

            let jsonData;
            if (!exsitingProducts) {
                localStorageProduct.push(productInfo);
                useAppState.setAddCart(localStorageProduct.length);
                jsonData = JSON.stringify(localStorageProduct)
                localStorage.setItem("products", jsonData)
                notify(`${quantity} Item Added Successfull`)

            }
            else if (exsitingProducts.quantity !== quantity) {
                localStorageProduct = localStorageProduct.map(currEle => currEle.id === id ? productInfo : currEle)
                console.log(exsitingProducts)
                jsonData = JSON.stringify(localStorageProduct)
                localStorage.setItem("products", jsonData)
                notify(`${quantity} Item Added Successfull`)
            }

        } else {
            const jsonData = JSON.stringify([productInfo])
            notify(`${quantity} Item Added Successfull`)
            localStorage.setItem("products", jsonData)
            useAppState.setAddCart(1)


        }

    }


    return (
        <>
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
            <section>
                <div className='my-0 mx-auto py-28 px-11'>
                    <h2 className='font-bold text-3xl'>Why Choose e-shop Store</h2>
                    <p className='text-2xl font-light'>Choose e-shop EduHub for a holistic, enriching learning experience that empowers you to achieve your goals.</p>
                </div>
                <div className='my-0 mx-auto '>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-0'>
                        {
                            useAppState.data.map((element) => {
                                return (
                                    <div className='flex flex-wrap items-start gap-7 w-80 p-6 my-7 mx-auto shadow-lg' key={element.id}>
                                        <article className='flex flex-col items-start gap-4'>
                                            <span className='text-dark-teal bg-teal-100 py-1 px-4 rounded-full'>{element.category}</span>
                                            <div className='text-center w-40 h-40 mb-10'>
                                                <img src={element.imges} alt={element.imges} className='max-w-full ' />
                                            </div>
                                            <h2 className='text-3xl font-bold pt-2'>{element.title}</h2>
                                            <div className='text-yellow-400'>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarHalfIcon />
                                            </div>
                                            <p className='text-sm'>
                                                {element.decription}
                                            </p>
                                            <div className='flex gap-6 text-lg '>
                                                <span>
                                                    {`₹${element.discount_price.toLocaleString('en-IN')}`}
                                                </span>
                                                <span className='line-through'>
                                                    {`₹${element.actual_price.toLocaleString('en-IN')}`}
                                                </span>

                                            </div>
                                            <div className='flex gap-6 text-lg '>
                                                <p>
                                                    Total Stocks Available:
                                                </p>
                                                <p>
                                                    {element.stock}
                                                </p>
                                            </div>

                                            <div className='flex items-center text-lg font-medium text-center gap-6'>
                                                <p>Quantity(Pieces)</p>
                                                <div className='grid items-center grid-cols-3 my-3 mx-0 border-2 border-gray-500 rounded-lg'>

                                                    <button className='py-1 px-4 font-bold border-r-2 border-gray-500  text-lg' onClick={() => decrement(element)}>-</button>

                                                    <p className='py-1 px-4 text-lg'>{element.quantity}</p>

                                                    <button className='py-1 px-4 font-bold border-l-2 border-gray-500 text-lg' onClick={() => increment(element)}>+</button>

                                                </div>
                                            </div>


                                            <button className='bg-dark-teal text-teal-100 py-2  px-4 rounded-md hover:text-dark-teal hover:bg-teal-100 transition-all duration-400' onClick={() => addToCart(element)}>
                                                <ShoppingCartIcon />
                                                Add to Cart
                                            </button>

                                        </article>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;
