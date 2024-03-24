import React from 'react';
import ContactForm from './contact.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup.string().min(3, 'Please enter your full name, at least 3 characters').required('Full Name must be at least 3 characters'),
  subject: yup.string().min(3, 'Subject is required, and must be more than 3 characters').required('Subject must be at least 3 characters'),
  email: yup.string().email('Please enter a valid emailadress').required('Must be a valid email address'),
  body: yup.string().min(3, 'Your message must be more than 3 characters').required('Body must be at least 3 characters'),
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
    <ContactForm>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
        <label htmlFor="fullName">Full Name</label>
        </div>
        <div>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
        />
        </div>
        <p>{errors.fullName?.message}</p>
      </div>
      <div>
        <div>
        <label htmlFor="subject">Subject</label>
        </div>
        <div>
        <input
          type="text"
          id="subject"
          {...register('subject')}
        />
        </div>
        <p>{errors.subject?.message}</p>
      </div>
      <div>
      <div>
        <label htmlFor="email">Email</label>
        </div>
        <div>
        <input
          type="email"
          id="email"
          {...register('email')}
        />
        </div>
        <p>{errors.email?.message}</p>
      </div>
      <div>
      <div>
        <label htmlFor="body">Your message</label>
        </div>
        <div>
        <textarea
          id="body"
          {...register('body')}
        />
        </div>
        <p>{errors.body?.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
    </ContactForm>
  );
}

export default ContactPage;
