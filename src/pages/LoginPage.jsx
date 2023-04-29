import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const { handleSubmit, register } = useForm({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     login(email, password)
    // }

    return (
        <section className='center'>

            <Form onSubmit={handleSubmit} className="w-100 ">
                <h2 className="mb-3 fw-bold">Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Email"{...register("email")} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Senha" {...register("password")} />
                </Form.Group>

                <Button className="mb-3 w-100 fw-bold" variant="primary" type="submit">
                    Entrar
                </Button>

                <Button href='/register' variant="dark" className='w-100 fw-bold'>Cadastrar-se</Button>
            </Form>
        </section>
    )
}