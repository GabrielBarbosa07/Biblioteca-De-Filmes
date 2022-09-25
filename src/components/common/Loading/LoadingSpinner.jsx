import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingSpinner() {
    return (
        <Backdrop
            sx={{ color: '#f7d354', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
