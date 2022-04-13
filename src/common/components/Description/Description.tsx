import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import DESCRIPTION_IMG from "/public/background-description.png"
import Image from "next/image"

const Description = () => {
    return (
        <Grid marginX={-7.5} height={650} position={"relative"}>
            <Image style={{ position: "absolute" }} layout={"fill"} src={DESCRIPTION_IMG} alt={"description"}/>
            <Grid position={"absolute"}
                  top={0}
                  bottom={0}
                  right={0}
                  left={0}
                  container
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}>

                <Grid maxWidth={380}
                      minWidth={328}
                      container
                      color={"white"}
                      height={287}>
                    <Typography textAlign={"center"}
                                variant={"h1"}>
                        Test assignment for front-end developer
                    </Typography>

                    <Typography marginTop={-1.1} textAlign={"center"}>
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </Typography>
                </Grid>

                <Button sx={{ marginTop: "2.5px" }}>
                    Sign up
                </Button>
            </Grid>
        </Grid>
    );
};

export default Description;