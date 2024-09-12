/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header/Header';

import styles from './Contact.module.css';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  zip: string;
  mobile: string;
  optIn: boolean;
  message: string;
}

export default function Contact() {
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading('Submitting...');
    try {
      await fetch('/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      toast.error(e, { id: toastId });
    }
    toast.success('Submitted successfully', { id: toastId });
    navigate('/');
  };

  return (
    <div className="page">
      <Header
        redText=""
        whiteText="Contact Us"
        children={[
          <div className='subheading'>
            Let's talk Common Sense
          </div>
        ]}
      />

      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        {/* first name input */}
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...register('firstName', { required: true, maxLength: 20 })}
          aria-invalid={errors.firstName ? "true" : "false"} 
        />
        {errors.firstName?.type === 'required' 
        && <div role="alert">First name is required</div>}
        {errors.firstName?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 20 characters</div>}
        
        {/* last name input */}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...register('lastName', { required: false, maxLength: 20 })}
          aria-invalid={errors.lastName ? "true" : "false"} 
        />
        {errors.lastName?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 20 characters</div>}

        {/* email input */}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          {...register('email', {
            required: true,
            maxLength: 50,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          aria-invalid={errors.email ? "true" : "false"} 
        />
        {errors.email?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 50 characters</div>}
        {errors.email?.type === 'pattern'
          && <div role="alert">Must be a valid email</div>}
        {errors.email?.type === 'required'
          && <div role="alert">Email address is required</div>}

        {/* ZIP code input */}
        <label htmlFor="zip">ZIP Code</label>
        <input
          type="text"
          {...register('zip', {
            required: false,
            minLength: 5,
            maxLength: 5,
            pattern: /^[0-9]*$/,
          })}
          aria-invalid={errors.zip ? "true" : "false"} 
        />
        {errors.zip?.type === 'minLength'
          && <div role="alert">Length must be 5 characters</div>}
        {errors.zip?.type === 'maxLength'
          && <div role="alert">Length must be 5 characters</div>}
        {errors.zip?.type === 'pattern'
          && <div role="alert">Must be a valid ZIP code (numbers only)</div>}

        {/* mobile phone number input */}
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          {...register('mobile', {
            required: false,
            minLength: 10,
            maxLength: 10,
            pattern: /^[0-9]*$/,
          })}
          aria-invalid={errors.mobile ? "true" : "false"} 
        />
        {errors.mobile?.type === 'minLength'
          && <div role="alert">Length must be at least 10 characters</div>}
        {errors.mobile?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 12 characters</div>}
        {errors.mobile?.type === 'pattern'
          && <div role="alert">Must be a valid phone number (numbers only)</div>}

        {/* opt-in input */}
        <div className='checkbox-wrapper'>
          <input
            id='optIn'
            type="checkbox"
            {...register('optIn', { required: true })}
            aria-invalid={errors.optIn ? "true" : "false"}
          />
          <label htmlFor="optIn">Opt-In</label>
        </div>
        {errors.optIn?.type === 'required'
          && <div role="alert">Opt-in is required</div>}
        <p className={styles.disclaimer}>
          By checking this box, I expressly consent to receive text messages which could include alerts, donation requests, voting updates, and other important information from Elect Common Sense. These will be recurring SMS/MMS messages. I understand that message and data rates may apply. I understand that I may revoke this consent at any time by texting “STOP” to any mobile message sent from Elect Common Sense. Text JOIN to 83902 to opt in to message traffic.
          <br />
          <br />
          <Link to="/terms-of-service">
            Terms of Service
          </Link>
          <br />
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
        </p>

        {/* message input */}
        <label htmlFor="message">Add your message</label>
        <textarea 
          {...register('message', { required: false, maxLength: 300 })}
          aria-invalid={errors.message ? "true" : "false"} 
        />
        {errors.message?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 300 characters</div>}

        {/* submit button */}
        <input
          type="submit"
        />
        <a href='#'>Back to top</a>
      </form>
    </div>
  );
}
