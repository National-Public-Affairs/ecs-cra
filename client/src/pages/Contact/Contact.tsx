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
  zip: number;
  mobile: number;
  optIn: boolean;
  message: string;
}

export default function Contact() {
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    console.log(data);
    const toastId = toast.loading('Submitting...');
    try {
      const resp = await fetch('/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('response:', resp);
    } catch (e) {
      toast.error(e, { id: toastId });
    }
    toast.success('Submitted successfully', { id: toastId });
    navigate('/');
  };

  // const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>): Promise<any> => {
  //   event.preventDefault();
  //   // instantiates a toast notification whose status can be changed
  //   const toastId = toast.loading('Submitting...');
  //     // toast.success('Submitted successfully', { id: toastId }); 
  //     toast.error('You must be opted-in', { id: toastId });
  //   }
  // };

  return (
    <div className="page">
      <Header
        redText="CONTACT"
        whiteText=""
        children={[]}
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
          type="number"
          {...register('zip', { required: false, maxLength: 5 })}
          aria-invalid={errors.zip ? "true" : "false"} 
        />
        {errors.zip?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 5 characters</div>}

        {/* mobile phone number input */}
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          {...register('mobile', { required: false, maxLength: 10 })}
          aria-invalid={errors.mobile ? "true" : "false"} 
        />
        {errors.zip?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 10 characters</div>}

        {/* opt-in input */}
        <label htmlFor="optIn">Opt-In</label>
        <input
          type="checkbox"
          {...register('optIn', { required: true })}
          aria-invalid={errors.optIn ? "true" : "false"} 
        />
        {errors.optIn?.type === 'required'
          && <div role="alert">Opt-in is required</div>}
        <p className={styles.disclaimer}>
          By checking this box, I expressly consent to receive text messages from Elect Common sense. I understand that message and data rates may apply. I understand that I may revoke this consent at any time by texting “STOP” to any mobile message sent from Elect Common Sense. Text JOIN to 83902 to opt in to future traffic.
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
      </form>
    </div>
  );
}
