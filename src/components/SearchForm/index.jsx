import React from "react";
import { Formik, Form, Field } from "formik";
import ErrorInput from "../ErrorInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getHerosResults,
  setTop,
  setSpinner,
} from "../../actions/herosActions";

export default function SearchForm() {
  const top = useSelector((state) => state?.top);
  const dispatch = useDispatch();

  const getSuperHero = (hero) => {
    try {
      axios
        .get(`https://superheroapi.com/api.php/372344864528011/search/${hero}`)
        .then((res) => {
          dispatch(getHerosResults(res?.data.results));
          dispatch(setSpinner(false));
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
    return;
  };
  const searchSuperHero = (search) => {
    getSuperHero(search);
    dispatch(setTop(true));
    dispatch(setSpinner(true));
  };
  return (
    <div className="w-50">
      {!top && (
        <h2 className="text-light shadow-sm bg-dark py-4 rounded text-center">
          Find heroes for your team
        </h2>
      )}
      <Formik
        initialValues={{ search: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.search) {
            errors.search = "⚠️ Empty field";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            searchSuperHero(values.search);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-group mb-1">
              <Field
                type="text"
                name="search"
                className="form-control "
                placeholder="Search superhero"
                aria-label="Search superhero"
                aria-describedby="basic-addon2"
                autoComplete="off"
              />

              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
            <ErrorInput name="search" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
