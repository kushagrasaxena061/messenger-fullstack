'use client'

import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import Input from "@/app/components/input/Input"
import Button from "@/app/components/Button";


type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant == "LOGIN") {
            setVariant('REGISTER')
        }
        else {
            setVariant("LOGIN")
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === 'REGISTER') {
            //Axios Register
        }
        if (variant === "LOGIN") {
            // NEXT AUTH LOGIN
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
    }
    return (
        
    )
}
