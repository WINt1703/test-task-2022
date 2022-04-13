import {Grid, List, ListItem, Typography} from '@mui/material';
import React from 'react';
import GetUserResponse from "../../types/users/GetUserResponse";
import {NextPage} from "next";
import EmployerCard from "../EmployerCard/EmployerCard";
import styles from "/styles/employers.module.css"

type EmployersProps = {
    usersResponse: GetUserResponse,
}

const Employers: NextPage<EmployersProps> = ({usersResponse: { users }}) => {
    return (
        <Grid marginX={3} marginTop={17.5}>
            <Typography marginBottom={1.8} textAlign={"center"} variant={"h1"}>
                Working with GET request
            </Typography>

            <List className={styles.list}>
                {
                    users.map((u,i) => (
                        <ListItem className={styles.listItem} key={i}>
                            <EmployerCard employer={u}/>
                        </ListItem>
                    ))
                }
            </List>
        </Grid>
    );
};

export default Employers;