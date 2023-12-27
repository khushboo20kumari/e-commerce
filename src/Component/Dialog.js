import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import { useState } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <Box sx={{ position: 'relative' }}>

                    <Button autoFocus color="inherit" onClick={handleClose}>save</Button>
                </Box>
            </Dialog>
        </>
    );
}