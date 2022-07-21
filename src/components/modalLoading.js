import styles from './modalLoading.module.scss';

export default function ModalLoading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingView}>
                Loading...
            </div>
        </div>
    );

}