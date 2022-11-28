import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    itemss: {
        display: 'flex',
        flexDirection: 'column',
    },
    hidden: {
        display: 'none',
    },
    PlusShow: {
        color: 'orange',
        fontSize: '2rem',
        marginLeft: '1rem',
    },
    minusShow: {
        color: 'green',
        fontSize: '2rem',
        marginLeft: '1rem',
    },

    showText: {
        display: 'block',
        fontSize: '0.8rem',
        paddingLeft: '3rem',
    },
});
