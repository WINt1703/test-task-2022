import React from 'react';
import Header from "../common/components/Header/Header";
import Description from "../common/components/Description/Description";
import Employers from "../common/components/Employers/Employers";
import {getUsers} from "../common/api/users";
import GetUserResponse from "../common/types/users/GetUserResponse";
import {NextPage} from "next";
import {Grid} from "@mui/material";

export async function getServerSideProps(): Promise<{ props: IndexProps }> {
    return {
        props: {
            usersResponse: JSON.parse(JSON.stringify(await getUsers())),
        }
    }
}

type IndexProps = {
    usersResponse: GetUserResponse,
}

const Index: NextPage<IndexProps> = ({ usersResponse }) => {
    return (
        <Grid maxWidth={1170} margin={"auto"}>
            <Header/>
            <Description/>
            <Employers usersResponse={usersResponse}/>
        </Grid>
    );
};

export default Index;