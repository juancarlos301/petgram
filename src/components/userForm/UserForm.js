import React from "react";
import { useInputValue } from "../../hooks/useImputValue";
import { Form, Input, Button, Title, Span, DivAll, ImgA, ButtonOther } from './stylesUseForm'
import Img from '../../assets/animalito.png'

export const UserForm = ({ disabled, onSubmit, title, error, setView, word }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ email: email.value, password: password.value })
    }
    const onClick = () => {
        setView(prevState => !prevState)
    }
    return (
        <>
            <DivAll>
                <ImgA src={Img} />
            </DivAll>
            <Form disabled={disabled} onSubmit={handleSubmit} >
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' {...email} />
                <Input disabled={disabled} type='password' placeholder='Password' {...password} />
                <Button disabled={disabled} type="submit" >{title}</Button>
            </Form>
            <DivAll>
                {error && <Span>{error}</Span>}
                <ButtonOther onClick={onClick}>
                    {word}
                </ButtonOther>
            </DivAll>

        </>
    )
} 