import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import { AppContext } from "../../context/AppContext";
import ErrorInput from "../ErrorInput";

export default function SearchForm() {
	const { getSuperHero, top, setTop, setListOfResults, setSpinner } =
		useContext(AppContext);
	const searchSuperHero = search => {
		setListOfResults([]);
		getSuperHero(search);
		setTop(true);
		setSpinner(true);
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
				validate={values => {
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
