import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

import { Button, Form } from 'react-bootstrap';

import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
    email: z.string().nonempty("O email é obrigatório").email("Formato de email inválido"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 dígitos"),
})

export const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSubmitData = (data) => {
        login(data.email, data.password)
    }

    return (
        <section className='center'>

            <Form onSubmit={handleSubmit(handleSubmitData)} className="w-100">
                <h1 className="mb-3 fw-bold">Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Email"{...register("email")} />
                    {errors.email && <span className='error'>{errors.email.message}</span>}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Senha" {...register("password")} />
                    {errors.password && <span className='error'>{errors.password.message}</span>}

                </Form.Group>

                <Button className="mb-3 w-100 fw-bold" variant="warning" type="submit">
                    Entrar
                </Button>

                <Button href='/register' variant="dark" className='w-100 fw-bold'>Cadastrar-se</Button>
            </Form>
        </section>
    )
}