import React  from 'react';
import {reduxForm, Field} from "redux-form";
import {useSelector} from "react-redux";
import styles from './CoursesForm.module.css';
import { validate } from './validation';
import { ErrorLine } from './ErrorLine';

let CoursesForm = props => {
  const { handleSubmit, reset, pristine, submitting, submitFailed } = props;

  const errors = useSelector(state => state.form.testForm.syncErrors);
  const active = useSelector(state => state.form.testForm.active);
  const firstNameValue = useSelector(state => state.form.testForm.values?.firstName);
  const lastNameValue = useSelector(state => state.form.testForm.values?.lastName);

  const normalizeName = value => {
    return value.toUpperCase();
  }

    return (
        <form
          className={`${styles.form} ${submitFailed && styles.formError} ${!errors && submitFailed && styles.formValid}`}
          onSubmit={handleSubmit}
        >
          {
            submitting &&
            <div className={styles.loader}>
              <p className={styles.loaderText}>Submitting...</p>
            </div>
          }
            <div className={`${styles.formGroup} ${active === "firstName" && styles.active}`}>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                        normalize={
                          lastNameValue ? normalizeName : value => value
                        }
                    />
                  {
                    submitFailed && errors?.firstName &&
                    <ErrorLine className={styles.error} text={errors?.firstName} />
                  }
                </div>
            </div>
            <div className={`${styles.formGroup} ${active === "lastName" && styles.active}`}>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                        normalize={
                          firstNameValue ? normalizeName : value => value
                        }
                    />
                  {
                    submitFailed && errors?.lastName &&
                    <ErrorLine className={styles.error} text={errors?.lastName} />
                  }
                </div>
            </div>
            <div className={`${styles.formGroup} ${active === "email" && styles.active}`}>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                        format={value => value?.toLowerCase()}
                    />
                  {
                    submitFailed && errors?.email &&
                    <ErrorLine className={styles.error} text={errors?.email} />
                  }
                </div>
            </div>
            <div className={`${styles.formGroup} ${active === "sex" && styles.active}`}>
                <label>Sex</label>
                <div>
                    <label>
                        <Field name="sex" component="input" type="radio" value="male" />{' '}
                        Male
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="female" />{' '}
                        Female
                    </label>
                    <label>
                        <Field name="sex" component="input" type="radio" value="other" />{' '}
                        Other
                    </label>
                  {
                    submitFailed && errors?.sex &&
                    <ErrorLine className={styles.error} text={errors?.sex} />
                  }
                </div>
            </div>
            <div className={`${styles.formGroup} ${active === "favoriteColor" && styles.active}`}>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="#ff0000">Red</option>
                        <option value="#00ff00">Green</option>
                        <option value="#0000ff">Blue</option>
                    </Field>
                  {
                    submitFailed && errors?.favoriteColor &&
                    <ErrorLine className={styles.error} text={errors?.favoriteColor} />
                  }
                </div>
            </div>
            <div className={`${styles.formGroup} ${active === "employed" && styles.active}`}>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                  {
                    submitFailed && errors?.employed &&
                    <ErrorLine className={styles.error} text={errors?.employed} />
                  }
                </div>
            </div>
            <div className={`${styles.formGroup} ${active === "notes" && styles.active}`}>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea" />
                  {
                    submitFailed && errors?.notes &&
                    <ErrorLine className={styles.error} text={errors?.notes} />
                  }
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
                <button type="button" onClick={reset} disabled={pristine || submitting}>
                    Clear Values
                </button>
            </div>
        </form>
    );
}

const onSubmit = (values) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Values___', values);
      res();
    }, 1000)
  })
}

CoursesForm = reduxForm({
    form: 'testForm',
    validate,
    onSubmit
})(CoursesForm)

export {
    CoursesForm
}
