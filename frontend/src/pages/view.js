import {useEffect, useState} from 'react';
import http from '../http';
import { useNavigate, useParams } from 'react-router-dom';

export default function View(props){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        fetchUser();
    }, []);

    const fetchUser = () => {
        http.get('/users/'+id+'/edit').then((res)=> {
            setInputs({
                name: res.data.name,
                email: res.data.email,
            });
        })
    }
    return (
        <div>
            <h2>View User</h2>
            <div className="row">
                <div className="col col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <label>Name</label>
                        <p>{ inputs.name }</p>
                        <label>Email</label>
                        <p>{ inputs.email }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}