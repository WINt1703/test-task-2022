import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import Image from "next/image"
import LOGO_IMG from "/public/logo.svg"

const Header = () => {
    return (
        <Grid height={60}
              alignItems={"center"}
              justifyContent={"space-between"}
              container
              paddingX={7.5}>
            <Image src={LOGO_IMG} alt={"logo"}/>
            <Grid item>
                <Button sx={{ marginRight: 1.2 }}>
                    Users
                </Button>
                <Button>
                    Sign up
                </Button>
            </Grid>
        </Grid>
    );
};

export default Header;