import styles from "../newArrivals/newArrivals.module.css"
import images from "../../assets/images";
import {Star } from '../../assets/icons'
import { useGetAllProductsQuery } from "../../api/ProductAPI";


const NewArrivals = () => {
    const data = useGetAllProductsQuery()
    console.log(data)

    return(
        <>
            <div className={styles.main_container}>
                <h2>NEW ARRIVALS</h2>
                {/* <div className={styles.new_arrivals}>
                    <div className={styles.arrival}>
                        <span className={styles.clothe_image} style={{backgroundImage:`URL(${images.clothe1})`, backgroundSize:'cover', backgroundPosition:'center'}}></span>
                        <h3>T-SHIRT WITH TAPE DETAILS</h3>
                        <span><Star/><Star/><Star/><Star/>4.5</span>
                        <span className={styles.price}>$120</span>
                    </div>
                </div> */}

                <div className={styles.new_arrivals}>
                    {
                        data.data?.map((product) =>(
                            <div key={product.id} className={styles.arrival}>
                                <span className={styles.clothe_image} style={{backgroundImage:`URL(${product.image})`, backgroundSize:'cover', backgroundPosition:'center'}}></span>
                                <h3>{product.title}</h3>
                                {/* <span><Star/><Star/><Star/><Star/>{product.rating.rate}</span> */}
                                <span className={styles.price}>${product.price}</span>
                            </div>
                        ))
                    }
                </div>


                <button>View All</button>
            </div>
        </>
    );
}
export default NewArrivals