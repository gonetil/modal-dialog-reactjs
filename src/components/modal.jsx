import { useRef } from "react";
import styles from './modal.module.scss';

export default function Modal({title,children, root}) {
    const ref = useRef(null);

    function unmountComponent(e) {
          root.unmount();
          document.querySelector('#modal').remove();
          ref.current.removeEventListener('animationend',unmountComponent);
    }
    function handleClick() {
        ref.current.classList.add(styles.fadeOut);
        ref.current.addEventListener('animationend', 
                                    unmountComponent, //que reactjs se encargue
                                    { once: true }  //el eventListener sólo existe una vez
                                    );
    }
    return (<div ref={ref} className={styles.modalContainer}> 
            <div className={styles.modalView}>
                    <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button className={styles.closeButton} onClick={handleClick}>x</button>
                    </div>
                    </div>
                    <div className={styles.modalContent}>{children}</div>

            </div>
    </div>);
}