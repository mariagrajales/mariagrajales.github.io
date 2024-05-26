// pages/RegistrationPage.jsx
import React, { useState } from 'react';
import RegistrationForm from '../components/organisms/RegistrationForm';
import ConsultorTable from '../components/organisms/ConsultorTable';
import Pila from '../Models/Pila';
import './Home.css';

const pila = new Pila();

function Home() {
    const [consultorList, setConsultorList] = useState(pila);

    const handleAddConsultor = (consultor) => {
        pila.push(consultor);
        setConsultorList({ ...pila });
    };

    return (
        <div id="Form_Home">
            <RegistrationForm onAddConsultor={handleAddConsultor} />
            <div className="contain_table">
            <ConsultorTable pila={consultorList} />
            </div>
        </div>
    );
}

export default Home;
