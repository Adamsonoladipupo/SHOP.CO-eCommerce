import React from "react";
import styles from "../happyCustomers/happyCustomer.module.css"
import { Star, Verified } from "../../assets/icons";

const HappyCustomers = () => {
    return(
        <>
            <div className={styles.main_container}>
                <div className={styles.customers}>
                    <div className={styles.customer}>
                        <span><Star/><Star/><Star/><Star/><Star/></span>
                        <span><h3>Sarah M. </h3><Verified/></span>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className={styles.customer}>
                        <span><Star/><Star/><Star/><Star/><Star/></span>
                        <span><h3>Alex K. </h3><Verified/></span>
                        <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div className={styles.customer}>
                        <span><Star/><Star/><Star/><Star/><Star/></span>
                        <span><h3>James L. </h3><Verified/></span>
                        <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HappyCustomers;