import React from 'react';
import Header from "../common/components/Header/Header";
import Description from "../common/components/Description/Description";
import Employers from "../common/components/Employers/Employers";
import {getUsers} from "../common/api/users";
import UsersResponse from "../common/types/users/UsersResponse";
import {NextPage} from "next";
import {Grid} from "@mui/material";
import Loading from "../module/loading/components/Loading";
import SignUp from "../common/components/SignUp/SignUp";
import PositionsResponse from "../common/types/positions/PositionsResponse";
import {getPositions} from "../common/api/positions";

export async function getServerSideProps(): Promise<{ props: IndexProps }> {
    return {
        props: {
            usersResponse: JSON.parse(JSON.stringify(await getUsers())),
            positionsResponse: JSON.parse(JSON.stringify(await getPositions()))
        }
    }
}

type IndexProps = {
    usersResponse: UsersResponse,
    positionsResponse: PositionsResponse
}

const Index: NextPage<IndexProps> = ({ usersResponse, positionsResponse }) => {
    return (
        <Loading>
            <Grid maxWidth={1170} margin={"auto"}>
                <Header/>
                <Description/>
                <Employers usersResponse={usersResponse}/>
                <SignUp positionsResponse={positionsResponse} />
            </Grid>
        </Loading>
    );
};

export default Index;