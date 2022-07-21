
import Modal from "./modal";

export default function ModalSettings({title,root}) {
    return (<Modal title={title} root={root}>
                <ul>
                    <li>Setting 1</li>
                    <li>Setting 2</li>
                    <li>Setting 3</li>
                </ul>
    </Modal>);
}