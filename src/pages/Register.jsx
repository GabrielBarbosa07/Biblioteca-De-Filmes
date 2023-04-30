import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import { Button, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O email é obrigatório").email("Formato de email inválido"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 dígitos"),
    confirmPassword: z.string()
}).refine((fields) => fields.password
    === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais"
})

export default function Register() {
    const { registerUser } = useContext(AuthContext);

    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: "onChange",
        criteriaMode: "all",
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const handleRegisterData = (data) => {
        registerUser(data.username, data.email, data.password);
    };

    return (
        <section className='center'>
            <Form onSubmit={handleSubmit(handleRegisterData)} className="w-100">
                <h1 className="mb-3 fw-bold">Cadastro</h1>
                <Form.Group className="mb-3">

                    <Form.Control
                        type="text"
                        placeholder="Nome"
                        {...register("name")}
                    />
                    {errors.name && <span className='error'>{errors.name.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Control
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                    />
                    {errors.email && <span className='error'>{errors.email.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Control
                        type="password"
                        placeholder='Digite sua Senha'
                        {...register("password")}
                    />
                    {errors.password && <span className='error'>{errors.password.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3" >

                    <Form.Control
                        type="password"
                        placeholder='Confirme sua Senha'
                        {...register("confirmPassword")}

                    />
                    {errors.confirmPassword && <span className='error'>{errors.confirmPassword.types.custom}</span>}
                </Form.Group>

                <Button variant="warning" className="w-100 fw-bold mb-3" type="submit">
                    Registrar
                </Button>

                <Button href='/login' variant="dark" className='w-100 fw-bold'>Fazer Login</Button>
            </Form>
        </section>
    )
}
