import clsx from 'clsx';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import styles from './SingleTable.module.scss';

const SingleTable = () => {

    const { id } = useParams();

    const tableData = useSelector(state => getTableById(state, id))

    return (
        <>
            <h1 className={"mb-4"}>Table {tableData.id}</h1>
            <Form>
                <Form.Label className="d-inline fw-bold pe-3 mb-4">Status:</Form.Label>
                <Form.Select className="d-inline w-25 mb-4" aria-label="Default select example" >
                    <option value="1">Free</option>
                    <option value="2">Busy</option>
                    <option value="3">Reserved</option>
                    <option value="4">Cleaning</option>
                </Form.Select>
                <div>
                    <Form.Label className="d-inline fw-bold pe-3 mb-4">People:</Form.Label>
                    <Form.Control 
                        className={clsx("d-inline w-25 mb-4", styles.peopleAmount__input)} 
                        size="lg" 
                        type="text" 
                        value={tableData.peopleAmount}
                        />
                    <h5 className="d-inline px-2">/</h5>
                    <Form.Control 
                        className="d-inline w-25 mb-4" 
                        size="lg" type="text" 
                        value={tableData.maxPeopleAmount}
                        />
                </div>
                <div>
                    <Form.Label className="d-inline fw-bold pe-3 mb-4">Bill:</Form.Label>
                    <h5 className="d-inline px-2">$</h5>
                    <Form.Control 
                        className={clsx("d-inline w-25 mb-4", styles.peopleAmount__input)} 
                        size="lg" 
                        type="text" 
                        value={tableData.bill}
                        />
                </div>
                <Link to={"/table/"}>
                    <Button variant="primary" size="lg">Update</Button>
                </Link>
    </Form>
        </>
    )
}

export default SingleTable