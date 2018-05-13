import { SubmissionError } from 'redux-form'

// Field level validations

export const required = value => (value ? undefined : 'Required');

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2);

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

// Submit validations

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export function validateSubmit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.password !== 'redux-form') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}
