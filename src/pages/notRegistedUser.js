import React, { useContext, useState } from 'react'
import { UserForm } from '../components/userForm/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { AppContext } from '../contex'
import { LoginMutation } from '../containers/loginMutation'

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext)
    const [view, setView] = useState(true)


    return (
        <>

            {view ? (
                <RegisterMutation>
                    {
                        (register, { data, loading, error }) => {
                            const onSubmit = ({ email, password }) => {
                                const input = { email, password }
                                const variables = { input }
                                register({ variables }).then(({ data }) => {
                                    const { signup } = data
                                    activateAuth(signup)
                                })
                            }

                            const errorMsg = error && 'el usuario ya existe u ocurre algun  problema'

                            return (
                                <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' setView={setView} word='Iniciar Sesion' />
                            )
                        }
                    }
                </RegisterMutation>
            ) : (
                <LoginMutation>
                    {
                        (login, { data, loading, error }) => {
                            const onSubmit = ({ email, password }) => {
                                const input = { email, password }
                                const variables = { input }
                                login({ variables }).then(({ data }) => {
                                    const { login } = data
                                    activateAuth(login)
                                })
                            }

                            const errorMsg = error && 'la contraseña no es correcta o el usuario no existe'

                            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesión' setView={setView} word='registrarse' />
                        }
                    }
                </LoginMutation>
            )
            }
        </>
    )
}