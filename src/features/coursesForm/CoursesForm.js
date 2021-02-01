import React  from 'react';
import {reduxForm, Field} from "redux-form";
import styles from './CoursesForm.module.css';

let CoursesForm = ({handleSubmit, reset}) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className={styles.formGroup}>
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
                </div>
            </div>
            <div className={styles.formGroup}>
                <label>Favorite Color</label>
                <div>
                    <Field name="favoriteColor" component="select">
                        <option />
                        <option value="ff0000">Red</option>
                        <option value="00ff00">Green</option>
                        <option value="0000ff">Blue</option>
                    </Field>
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="employed">Employed</label>
                <div>
                    <Field
                        name="employed"
                        id="employed"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label>Notes</label>
                <div>
                    <Field name="notes" component="textarea" />
                </div>
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
                <button type="button" onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
}

CoursesForm = reduxForm({
    form: 'testForm'
})(CoursesForm)

export {
    CoursesForm
}
