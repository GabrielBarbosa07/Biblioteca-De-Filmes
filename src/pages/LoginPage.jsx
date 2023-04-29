import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';

const schema = z.object({
    email: z.string().email("Digite um email válido"),
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
        console.log({ "Email": data.email, "Senha": data.password })

        login(data.email, data.password)
    }

    return (
        <section className='center'>

            <Form onSubmit={handleSubmit(handleSubmitData)} className="w-100 ">
                <h2 className="mb-3 fw-bold">Login</h2>
                <Form.Group className="mb-3 relative" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Email"{...register("email")} />
                    {errors.email && <span className='error'>{errors.email.message}</span>}

                </Form.Group>

                <Form.Group className="mb-3 relative" controlId="formBasicPassword">

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