import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    paddingTop: '3em',
    padding: theme.spacing(2),
  },
  form: {
  
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  fileUpload: {
    width: '100%',
    margin: '10px 0',
  },
  button: {
    marginBottom: 10,
  },
  img: {
    paddingTop: '1em'
  }
}));
