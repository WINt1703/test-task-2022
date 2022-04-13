import {Button, Grid, List, ListItem, Typography} from '@mui/material';
import React, {useState} from 'react';
import GetUserResponse from "../../types/users/GetUserResponse";
import {NextPage} from "next";
import EmployerCard from "../EmployerCard/EmployerCard";
import styles from "/styles/employers.module.css"
import User from "../../types/users/User";
import {getUsers} from "../../api/users";
import {useDispatch} from "react-redux";
import {setLoading} from "../../../module/loading/slices/loadingSlice";

type EmployersProps = {
    usersResponse: GetUserResponse,
}

const Employers: NextPage<EmployersProps> = (props) => {
    const [usersResponse, setUsersResponse] = useState<GetUserResponse>(props.usersResponse)
    const dispatch = useDispatch()

    const showMoreHandler = async () => {
        dispatch(setLoading(true))
        setUsersResponse(await getUsers(usersResponse.page + 1))
        dispatch(setLoading(false))
    }

    return (
        <Grid container
              alignItems={"center"}
              direction={"column"}
              marginTop={17.5}>
            <Typography marginBottom={1.8} textAlign={"center"} variant={"h1"}>
                Working with GET request
            </Typography>

            <List className={styles.list}>
                {
                    usersResponse.users.map((u,i) => (
                        <ListItem className={styles.listItem} key={i}>
                            <EmployerCard employer={u}/>
                        </ListItem>
                    ))
                }
            </List>

            {
                usersResponse.links.next_url &&
                <Button className={styles.showMoreBtn} onClick={showMoreHandler}>
                    Show more
                </Button>
            }
        </Grid>
    );
};

export default Employers;