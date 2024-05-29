import React from 'react'
import { NavLink } from 'react-router-dom'
import hpLaptop from '../Images/hplaptop.png';
import applephone from '../Images/applephone.png';
import boatheadphone from '../Images/boatheadphone.png';
import { useState } from 'react'


const Extraproduct = () => {

    const [data, setData] = useState([
        {
            offer: "Get And Extra 50% Off",
            link: "https://www.flipkart.com/hp-14a-intel-celeron-dual-core-n4500-4-gb-64-gb-emmc-storage-chrome-os-14a-na1004tu-chromebook/p/itm4489ddf90925c?pid=COMGKW2NUQJFVKSC&lid=LSTCOMGKW2NUQJFVKSC8789EM&marketplace=FLIPKART&q=laptop&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=en_Us0JaHL0eZSQMKW9mq0s7rqsOK4_lOXBbz_2qXnr794qItHgbXOLMNN3Nein0IYZpjbaB1jnSVxFUevydu2VkU4IsYyWu-Pj9cxFjFAoaLk%3D&ppt=hp&ppn=homepage&ssid=hws7dpunk00000001716342413437&qH=312f91285e048e09",
            img:hpLaptop

        },
        {
            offer: "40% Discount On Speakers",
            link: "https://www.flipkart.com/boat-rockerz-600-hd-sound-bluetooth-headset/p/itm79ac4c9499b84?pid=ACCEZ98442AZKA4W&lid=LSTACCEZ98442AZKA4WTOPTTW&marketplace=FLIPKART&q=headphones+boat&store=0pm%2Ffcn&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_na&fm=search-autosuggest&iid=475023fe-87ae-410a-bc47-8a149ccbb3c3.ACCEZ98442AZKA4W.SEARCH&ppt=sp&ppn=sp&ssid=j7s8mqkjj40000001716347958007&qH=e9698ba16f3a3269",
            img:boatheadphone
        },
        {
            offer: "Get And Extra 50% Off",
            link: "https://www.flipkart.com/apple-iphone-12-white-64-gb/p/itm8b88bdc03cd79?pid=MOBFWBYZTK33MBG9&lid=LSTMOBFWBYZTK33MBG98APVO4&marketplace=FLIPKART&q=i+phone&store=tyy%2F4io&spotlightTagId=FkPickId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=83295022-ddcb-4856-bab5-916a2adfb358.MOBFWBYZTK33MBG9.SEARCH&ppt=sp&ppn=sp&ssid=qf5h6zlei80000001716348015574&qH=8de575501391c29c",
            
            img:applephone
        }
    ])

    return (
        <>
            <section className='my-10  mx-7 shadow-lg min-w-56'>
                <div className='flex justify-between flex-wrap    ' >
                    {/* show sale */}

                    {
                        data.map((element, index) => {
                            return (
                                <div className='flex min-w-56 py-5 md:w-fit w-full md:shadow-sm  md:flex-row flex-col-reverse mt-4 md:mx-0 mx-4' key={index}>
                                    <div className='m-10 '>
                                        <p className='bg-dark-teal text-teal-100 inline-block px-5  text-lg '>NEW YEAR SALE</p>
                                        <h3 className='font-bold text-2xl w-40'>{element.offer}</h3>
                                        <NavLink to={element.link} className="text-sm hover:underline" target='_blank'>SHOW NOW</NavLink>
                                    </div>

                                    <div className='flex justify-center'>
                                        <img src={element.img} className='md:w-36  md:h-36  md:mr-10' />
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </section>
        </>
    )
}

export default Extraproduct;