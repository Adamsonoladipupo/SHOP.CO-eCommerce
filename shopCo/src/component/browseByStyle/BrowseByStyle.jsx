import styles from '../browseByStyle/browseByStyle.module.css'
import images from '../../assets/images';

const BrowseByStyle = () => {
    return (
        <>
        <div className={styles.main_container}>
            <h2>BROWSE BY dress STYLE</h2>
            <div className={styles.clothe_styles}>
                <span className="style">
                    <img src={images.casualStyle} alt="casual" />
                </span>
                <span className="style">
                    <img src={images.formalStyle} alt="formal" />
                </span>
                <span className="style">
                    <img src={images.partyStyle} alt="party" />
                </span>
                <span className="style">
                    <img src={images.gymStyle} alt="gym" />
                </span>
            </div>
        </div>
        </>
    );
}
export default BrowseByStyle