import styles from "../newArrivals/newArrivals.module.css"
import images from "../../assets/images";
import {Star } from '../../assets/icons'


const NewArrivals = () => {
    return(
        <>
            <div className={styles.main_container}>
                <h2>NEW ARRIVALS</h2>
                <div className={styles.new_arrivals}>
                    <div className={styles.arrival}>
                        <span className={styles.clothe_image} style={{backgroundImage:`URL(${images.clothe1})`, backgroundSize:'cover', backgroundPosition:'center'}}></span>
                        <h3>T-SHIRT WITH TAPE DETAILS</h3>
                        <span><Star/><Star/><Star/><Star/>4.5</span>
                        <span className={styles.price}>$120</span>
                    </div>
                </div>
                <button>View All</button>
            </div>
        </>
    );
}
export default NewArrivals