import React from 'react';
import {Button, Grid, Stack, Typography} from "@mui/material";
import PositionsResponse from "../../types/positions/PositionsResponse";
import {NextPage} from "next";
import {FormContainer, RadioButtonGroup, TextFieldElement} from "react-hook-form-mui";
import {FieldError, useForm} from "react-hook-form";
import styles from "/styles/signup.module.css"
import {EMAIL_PATTERN, PHONE_PATTERN} from "../../utils/patterns";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import OptionValue from "../../types/OptionValue";
import {FileContent} from "use-file-picker/dist/interfaces";
import {signUp} from "../../api/users";
import {useDispatch} from "react-redux";
import {setLoading} from "../../../module/loading/slices/loadingSlice";
import UserResponse from "../../types/users/UserResponse";
import { FailsUserFields } from "../../types/users/UserError";
import {showToast} from "../../../module/toast/slices/toastSlice";
import Router from "next/router";

type SignUpProps = {
    positionsResponse: PositionsResponse
}

type FormProps = {
    name?: string
    email?: string
    phone?: string
    position?: string,
    photo?: FileContent
}

const SignUp: NextPage<SignUpProps> = ({ positionsResponse: { positions } }) => {
    const dispatch = useDispatch()
    const formContext = useForm<FormProps>({
        mode: "onChange",
    })

    const nameParserErrorHandler = (error: FieldError) => {
        switch (error.type) {
            case "minLength":
                return "Name must be more 2 letters"
            case "maxLength":
                return "Name must be less 100 letters"
        }

        return ""
    }
    const phoneParserErrorHandler = (error: FieldError): string => {
        switch (error.type) {
            case "pattern":
                return "Invalid phone"
            case "required":
                return error.message || "Field is requited"
        }

        return ""
    }
    const submitHandler = async (data: FormProps) => {
        dispatch(setLoading(true))

        const response = await signUp({
            name: data.name!,
            phone: data.phone!,
            photo: data.photo!,
            position_id: data.position!,
            email: data.email!,
        })

        if (response instanceof UserResponse) {
            dispatch(showToast("Success create user"))
            Router.push("/success-signup").then()
        }
        else {
            if (response.fails) {
                Object.keys(response.fails).forEach(field => {
                    formContext.setError(field as keyof FormProps, {
                        message: response.fails[field as keyof FailsUserFields]![0]
                    })
                })
            }

            dispatch(showToast({
                type: "error",
                message: response.message,
            }))
        }

        dispatch(setLoading(false))
    }


    return (
        <Grid marginTop={"140px"}>
            <Typography textAlign={"center"}
                        variant={"h1"}>
                Working with POST request
            </Typography>

            <FormContainer onSuccess={submitHandler}
                           formContext={formContext}>
                <Stack className={styles.form}>

                    <TextFieldElement name={"name"}
                                      required
                                      parseError={nameParserErrorHandler}
                                      className={styles.input}
                                      validation={{
                                          minLength: 2,
                                          maxLength: 100,
                                      }}
                                      label={"Your name"}/>

                    <TextFieldElement name={"email"}
                                      required
                                      type={"email"}
                                      className={styles.input}
                                      label={"Email"}/>

                    <TextFieldElement name={"phone"}
                                      type={"tel"}
                                      parseError={phoneParserErrorHandler}
                                      required
                                      validation={{
                                          pattern: PHONE_PATTERN,
                                      }}
                                      className={styles.input}
                                      label={"Phone"}
                                      helperText={"+38 (XXX) XXX - XX - XX"}/>

                    <Typography marginTop={3.15}>
                        Select your position
                    </Typography>

                    <RadioButtonGroup
                        name={"position"}
                        required
                        options={positions.map<OptionValue>(p => ({ id: p.id.toString(), label: p.name }))}
                    />

                    <UploadPhoto margin={"44px 0 0 0"}
                                 formContext={formContext}
                                 required
                                 name={"photo"} />

                    <Button disabled={!formContext.formState.isValid}
                            type={"submit"}
                            className={styles.submitButton}>
                        Sign up
                    </Button>
                </Stack>
            </FormContainer>
        </Grid>
    );
};

export default SignUp;