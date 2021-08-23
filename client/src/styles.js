import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
       paddingTop: '1em',
       borderRadius: '1em'
    },
    title: {
      fontFamily: 'monospace',
    }
  
}));