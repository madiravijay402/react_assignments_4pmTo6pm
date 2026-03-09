import React from 'react'

const Products = () => {
    const productObj = [
        {
            name: "Fridge",
            img: "/fridge.png",
            price: 30490,
            mrp: 45999,
        },
        {
            name: "Television",
            img: "/telivison.png",
            price: 25999,
            mrp: 37899,
        },
        {
            name: "Air Conditioner",
            img: "/airconditioner.png",
            price: 37899,
            mrp: 45666,
        },
    ];

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 mx-10">
                {productObj.map((val, ind) => (
                    <div
                        key={ind}
                        className="w-60 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
                    >
                        <img
                            src={val.img}
                            alt={val.name}
                            className="w-full h-40 object-cover mb-3 rounded"
                        />
                        <div className="text-lg font-semibold text-gray-800 mb-1">
                            {val.name}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                            <span className="text-red-500 font-bold">
                                ₹{val.price}
                            </span>{' '}
                            <del className="text-gray-400">
                                ₹{val.mrp}
                            </del>
                        </div>
                        <button className="mt-auto bg-amber-400 hover:bg-amber-500 text-white py-2 px-4 rounded">
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products