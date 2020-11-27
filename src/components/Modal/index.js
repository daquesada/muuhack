import React, { Fragment } from 'react';
import {Modal, Button} from 'react-bootstrap'
import { GiMilkCarton } from 'react-icons/gi'

const SIZE = 32
export const ModalComponent = ({ show=false, handleClose, name='?', data=[] }) => {

    
    return (
        <Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ name }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        data.map((_,index)=>
                            <GiMilkCarton key={index} size={SIZE} />   
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}