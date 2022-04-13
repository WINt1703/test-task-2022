import React from 'react';
import User from "../../types/users/User";
import {NextPage} from "next";
import {Grid, Typography} from "@mui/material";
import Image from "next/image";

type EmployerCard = {
    employer: User,
}

const EmployerCard: NextPage<EmployerCard> = ({ employer }) => {
    return (
        <Grid bgcolor={"#fff"}
              width={282}
              height={254}
              padding={2.4}
              container
              direction={"column"}
              alignItems={"center"}
              borderRadius={"10px"}
              >
            <Image layout={"fixed"}
                   width={70}
                   height={70}
                   src={employer.photo}
                   alt={employer.name}
                   style={{ borderRadius: "50%" }}
            />
            <Typography width={"100%"} noWrap marginTop={2.5} textAlign={"center"}>
                { employer.name }
                <Typography noWrap marginTop={2.5}>
                    { employer.position }
                    <br/>
                    { employer.email }
                    <br/>
                    { employer.phone }
                </Typography>
            </Typography>
        </Grid>
    );
};

export default EmployerCard;