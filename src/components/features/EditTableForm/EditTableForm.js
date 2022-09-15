import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { Navigate } from 'react-router-dom';

import TableForm from '../TableForm/TableForm';

const EditTableForm = () => {
    
    /*
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/')
    };

    */
    const { id } = useParams();

    const tableData = useSelector(state => getTableById(state, id))
    
    const actionText = "Update";

    if(!tableData) return <Navigate to="/" />
    else return (
        <TableForm 
            //action={handleSubmit} 
            actionText={actionText}
            id={tableData.id}
            status={tableData.status}
            peopleAmount={tableData.peopleAmount}
            maxPeopleAmount={tableData.maxPeopleAmount}
            bill={tableData.bill}
        />
    )
}

export default EditTableForm