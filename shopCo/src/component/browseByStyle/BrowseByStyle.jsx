import styles from '../browseByStyle/browseByStyle.module.css'
import images from '../../assets/images';

const BrowseByStyle = () => {
    return (
        <>
        <div className={styles.main_container}>
            <h2>BROWSE BY dress STYLE</h2>
            <div className={styles.clothe_styles}>
                <div className="style">
                    <span>Casual</span>
                    <img src={images.casualStyle} alt="casual" />
                </div>
                <div className="style">
                    <span>Formal</span>
                    <img src={images.formalStyle} alt="formal" />
                </div>
                <div className="style">
                    <span>Party</span>
                    <img src={images.partyStyle} alt="party" />
                </div>
                <div className="style">
                    <span>Gym</span>
                    <img src={images.gymStyle} alt="gym" />
                </div>
            </div>
        </div>
        </>
    );
}
export default BrowseByStyle