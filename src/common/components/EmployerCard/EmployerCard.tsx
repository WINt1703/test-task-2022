import React from 'react';
import User from "../../types/users/User";
import {NextPage} from "next";
import {Grid, Tooltip, Typography} from "@mui/material";
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
            <Tooltip title={employer.name}>
                <Typography width={"100%"} noWrap marginTop={2.5} textAlign={"center"}>
                    { employer.name }
                </Typography>
            </Tooltip>

            <Tooltip title={employer.position}>
                <Typography width={"100%"} marginTop={2.5} noWrap textAlign={"center"}>
                    { employer.position }
                </Typography>
            </Tooltip>

            <Tooltip title={employer.email}>
                <Typography width={"100%"} noWrap textAlign={"center"}>
                    { employer.email }
                </Typography>
            </Tooltip>

            <Tooltip title={employer.phone}>
                <Typography width={"100%"} noWrap textAlign={"center"}>
                    { employer.phone }
                </Typography>
            </Tooltip>
        </Grid>
    );
};

export default EmployerCard;