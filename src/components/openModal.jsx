import React, {Suspense, lazy} from "react";
import { createRoot } from 'react-dom/client';
import ModalLoading from "./modalLoading";

export function openModal() {
  const Modal = lazy(() => import('./modal'));
  const modalDiv = document.createElement('div');
  modalDiv.id = 'modal';
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(<Suspense fallback={<ModalLoading />}>
                <Modal 
                  title='Modal de prueba' 
                  root={root}>Contenido del modal de prueba </Modal> 
              </Suspense>)
}


export function openModalSettings() {
  const Modal = lazy(() => import('./modalSettings'));
  const modalDiv = document.createElement('div');
  modalDiv.id = 'modalSettings';
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(<Suspense fallback={<ModalLoading />}>
                <Modal 
                  title='Modal de configuraciones' 
                  root={root} /> 
              </Suspense>)
}