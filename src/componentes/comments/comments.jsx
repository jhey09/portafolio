import './Comments.css'
import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from "../../assets/database/Firebase"
import Headers from '../header/header'
 
const Comments = () => {
  const [usuario, setUsuario] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    mensaje: '',
  });

  const getData = () => {
    onSnapshot(collection(db, 'comments'), (snapshot) => {
      const arrData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsuario(arrData);
    });
  };

  const sendData = () => {
    if (form.nombre && form.mensaje ) {
      addDoc(collection(db, 'comments'), form);
      setForm({
        nombre: '',
        mensaje: '',
        
      });
    } else {
      alert('formulario incompleto');
    }
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  const onDelete = async (id) => {
    await deleteDoc(doc(db, 'comments', id));
    getData();
  };

  useEffect(() => {
    getData();
  }, []);


return(
<div className="ContainerComemmt">
 <div className="back">
 <h1>COMENTARIOS</h1>
  <a href="/"><i class='bx bx-left-arrow-alt'></i></a>
 </div>
  <hr />
<div className="AggComent">
<Form className='form' name='form'>
      <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
        <Form.Label className='label nombre'>Nombre</Form.Label>
        <Form.Control type="text" className='inputtext nombre' name="nombre" value={form.nombre} onChange={handleChange} />
      </Form.Group>
      <Form.Group className='Formtextarea' placeholder='Agg aqui un comentario que me ayude a crecer, a mejorar o un comentario  de apoyo' controlId="exampleForm.ControlTextarea1" >
        <Form.Label className='label'>COMENTARIO</Form.Label>
        <Form.Control  className='inputtext'  as="textarea" rows={5} name="mensaje" value={form.mensaje} onChange={handleChange} />
      </Form.Group>
      <button className="boton" type="button" onClick={sendData}>
            enviar
          </button>
    </Form>
</div>
<hr />
<div className="ContainerCardComment">
{usuario.map((item) => (
<Card style={{ width: '20rem' }}   className='cardComment'>
      <Card.Body>
        <Card.Title> {item.nombre}</Card.Title>
        <Card.Text className='cardCommentText'>
        {item.mensaje}
        </Card.Text>
        <Card.Link href="#" className='cardCommentText delete' onClick={() => onDelete(item.id)}>eliminar</Card.Link>
        
      </Card.Body>
    </Card>
     ))}
</div>

</div>
);

    
}
export default Comments