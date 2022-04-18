import React from 'react';
import {Stack, Typography} from "@mui/material";
import Image from "next/image";
import SUCCESS_IMG from "/public/success-image.svg"

const SuccessSignup = () => {
    return (
        <Stack height={"100vh"}
               width={"100vw"}
               justifyContent={"center"}
               direction={"column"}
               alignItems={"center"}>
            <Typography marginBottom={6}
                        variant={"h1"}>
                User successfully registered
            </Typography>

            <Image src={SUCCESS_IMG}
                   layout={"fixed"}
                   priority
                   width={328}
                   height={290}
                   alt={"success"}/>
        </Stack>
    );
};

export default SuccessSignup;