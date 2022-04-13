import React from 'react';
import {CircularProgress, Grid, Stack} from "@mui/material";
import {NextPage} from "next";
import styles from "/styles/loading.module.css"
import {useSelector} from "react-redux";
import {loadingSelector} from "../slices/loadingSlice";

type LoadingProps = {
    children: any
}

const Loading: NextPage<LoadingProps> = ({ children }) => {
    const loading = useSelector(loadingSelector)

    return (
        <>
            {
                loading &&
                <Stack className={styles.indicator}>
                    <CircularProgress color={"secondary"} />
                </Stack>
            }

            <Grid className={loading ? styles.children : undefined}>
                { children }
            </Grid>
        </>
    );
};

export default Loading;