import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  Box, Button,
  Card, CardContent,
  CardHeader, Divider,
  FormHelperText, Grid,
  TextField, makeStyles
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {},
}));

const CreateQuiz = ({ className, ...rest }) => {
  
    const classes = useStyles();
    const history = useHistory();

    return (
    <div> initial create quiz </div>
  );
};

CreateQuiz.propTypes = {
  className: PropTypes.string
};

export default CreateQuiz;
