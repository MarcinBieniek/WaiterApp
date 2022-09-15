import clsx from 'clsx';
import {useState} from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import styles from './TableForm.module.scss';

const TableForm = ({
    actionText,
    ...props}
) => {

    const [status, setStatus] = useState(props.status);
    const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount)
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount)
    const [bill, setBill] = useState(props.bill);

    console.log('maxPeopleAmount', maxPeopleAmount)

    return (
        <>
            <h1 className={"mb-4"}>Table {props.id}</h1>
            <Form>
                <Form.Label className="d-inline fw-bold pe-3 mb-4">Status:</Form.Label>
                <Form.Select 
                    className="d-inline w-25 mb-4" 
                    aria-label="Select status" 
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    >              
                        <option value="Free">Free</option>
                        <option value="Busy">Busy</option>
                        <option value="Reserved">Reserved</option>
                        <option value="Cleaning">Cleaning</option>
                </Form.Select>

                <div>
                    <Form.Label className="d-inline fw-bold pe-3 mb-4">People:</Form.Label>
                    <Form.Control 
                        className={clsx("d-inline w-25 mb-4", styles.peopleAmount__input)} 
                        size="lg" 
                        type="text" 
                        value={peopleAmount}
                        onChange={e => setPeopleAmount(e.target.value)}
                        />
                    <h5 className="d-inline px-2">/</h5>
                    <Form.Control 
                        className="d-inline w-25 mb-4" 
                        size="lg" type="text" 
                        value={maxPeopleAmount}
                        onChange={e => setMaxPeopleAmount(e.target.value)}
                        />
                </div>
                <div>
                    <Form.Label className="d-inline fw-bold pe-3 mb-4">Bill:</Form.Label>
                    <h5 className="d-inline px-2">$</h5>
                    <Form.Control 
                        className={clsx("d-inline w-25 mb-4", styles.peopleAmount__input)} 
                        size="lg" 
                        type="text" 
                        value={bill}
                        onChange={e => setBill(e.target.value)}
                        />
                </div>
                <Link to={"/"}>
                    <Button variant="primary" size="lg">Update</Button>
                </Link>
    </Form>
        </>
    )
}

export default TableForm;