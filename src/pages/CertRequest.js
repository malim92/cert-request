import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

//Data
const initialValues = {
  addressTo: "",
  purpose: "",
  issuedOn: "",
  employeeId: "",
};

//validation schema
let validationSchema = Yup.object().shape({
  addressTo: Yup.string().required("Required"),
  purpose: Yup.string()
    .required("Required")
    .min(50, "must be at least 50 characters long"),
  issuedOn: Yup.date()
    .min(new Date(), "Date must be in the future")
    .required("Required"),
  employeeId: Yup.number().required("Required"),
});

const CertRequestForm = () => {
  const classes = useStyle();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={6}>
        <Card className={classes.padding}>
          <CardHeader title="Request Certifcate"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              dirty,
              isValid,
              values,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={3} justifyContent="center">
                      <Grid item xs={12} sm={6} md={12}>
                        <Field
                          label="Address to"
                          variant="outlined"
                          fullWidth
                          name="addressTo"
                          value={values.addressTo}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={12}>
                        <Field
                          label="Purpose"
                          variant="outlined"
                          fullWidth
                          name="purpose"
                          value={values.purpose}
                          component={TextField}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6} md={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            variant="outlined"
                            name="Issued On"
                            label="Issued On"
                            inputFormat="MM/dd/yyyy"
                            value={values.issuedOn}
                            onChange={(newValue) =>
                              setFieldValue("issuedOn", newValue)
                            }
                            renderInput={(params) => (
                              <Field
                                {...params}
                                fullWidth
                                variant="outlined"
                                name="issuedOn"
                                component={TextField}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={12} sm={6} md={12}>
                        <Field
                          label="Employee Id"
                          variant="outlined"
                          fullWidth
                          name="employeeId"
                          value={values.employeeId}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      className={classes.button}
                    >
                      REGISTER
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CertRequestForm;
