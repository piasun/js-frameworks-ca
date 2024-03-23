import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup.string().min(3, 'Full Name must be at least 3 characters').required('Please enter your full name'),
  subject: yup.string().min(3, 'Subject must be at least 3 characters').required('Subject is required, and must be more than 3 characters'),
  email: yup.string().email('Must be a valid email address').required('Please enter a valid emailadress'),
  body: yup.string().min(3, 'Body must be at least 3 characters').required('Your message must be more than 3 characters'),
});

function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
        />
        <p>{errors.fullName?.message}</p>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          {...register('subject')}
        />
        <p>{errors.subject?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          {...register('body')}
        />
        <p>{errors.body?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactPage;
