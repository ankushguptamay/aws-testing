import { Button, Card, CardContent, Container, Grid, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import { QrReader } from 'react-qr-reader';
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        background: 'blue',
        color: 'white'
    },
    btn: {
        marginTop: 10,
        marginBottom: 20
    }
}))

function QrCode() {
    const classes = useStyles();
    const [image, setImage] = useState({ image: "" });
    const [qRImage, setQRImage] = useState('');
    const changeImage = (e) => {
        setImage({ ...image, [e.target.name]: e.target.files[0] })
    }

    return (
        <div>
            <Container className={classes.container}>
                <Card>
                    <h2 className={classes.title}>Generate QR Code</h2>
                    <CardContent>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <label htmlFor="input-files" className="col-sm-2 col-form-label">Video: </label>
                            <input type="file" name="image" id="input-files" onChange={changeImage} />
                            <div>
                                <iframe src="https://iframe.mediadelivery.net/embed/129728/b203ae0c-e4f1-4997-b53f-f57a643d9174?autoplay=true&preload=true" loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
                            </div>

                            <br />
                            <Button variant="contained" color='primary' className={classes.btn}>Submit</Button>
                            <br />
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default QrCode;