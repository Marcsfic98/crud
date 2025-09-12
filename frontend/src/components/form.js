import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius:5px;
    height: 40px;
`
const Label = styled.label``

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`


export function Form({onEdit}) {

        const ref = useRef();

    useEffect(()=>{
        if(onEdit){
            const user = ref.current;

            user.name.value = onEdit.name;
            user.email.value = onEdit.email;
            user.fone.value = onEdit.fone;
            user.date.value = onEdit.date;
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if(
            !user.name.value ||
            !user.email.value ||
            !user.fone.value ||
            !user.date.value 
        ){
            return toast.warn("Preencha todos os campos!")
        }

        if(onEdit){
            await axios.put("http://localhost:8800/" + onEdit.id ,{
                nome:user.name.value,
                email: user.email.value,
                fone: user.fone.value,
                date: user.date.value
            }).then(({data}) => toast.success(data)).catch(({data}) => toast.error(data))
        }
    }



  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
            <Label>Nome</Label>
            <Input name="nome" />
        </InputArea>

        <InputArea>
            <Label>Email</Label>
            <Input name="email" type='email'/>
        </InputArea>

        <InputArea>
            <Label>Telefone</Label>
            <Input name="fone" />
        </InputArea>

        <InputArea>
            <Label>Data de Nascimento</Label>
            <Input name="date" type='date' />
        </InputArea>

        <Button type="submit">SALVAR</Button>

    </FormContainer>
  );
}