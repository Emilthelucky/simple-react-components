import { useEffect } from "react"
import { useState } from "react"
import "./styles.css"

export default function LoadMore() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [count, setCount] = useState(0)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)

            const result = await response.json()

            if (result) {
                setProducts((prevData) => [...prevData, ...result.products])
                console.log(products)
                setLoading(false)
            }

        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if(products.length === 120){
            setDisabled(true)
        }
    })

    if (loading) {
        return <div>Loading</div>
    }

    return <div className="main">
        <div className="products-container">

            {

                products ? products.map((item) => <div key={item.id} className="single-product">
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                </div>)
                    : null
            }

        </div>
        <button disabled={disabled} onClick={() => setCount(count + 1)}>Load More</button>
    </div>
}