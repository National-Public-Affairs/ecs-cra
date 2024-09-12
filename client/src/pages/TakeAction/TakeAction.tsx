/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header/Header';

import styles from './TakeAction.module.css';

type FormData = {
  typeCandidateReferral: boolean;
  typeVolunteering: boolean;
  typeGrassroots: boolean;
  firstName: string;
  lastName: string;
  county: string;
  email: string;
  zip: string;
  mobile: number;
  message?: string;
  volunteerInterest?: 
    | 'door knocking'
    | 'phone banking'
    | 'writing postcards'
    | 'literature drops'
    | 'sign placement'
    | 'hosting an event'
    | 'other'
  ;
}

export default function TakeAction() {
  const navigate = useNavigate();

  const {
    register,
    unregister,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>();
  // https://echobind.com/post/conditionally-render-fields-using-react-hook-form
  const watchCheckboxReferral = watch('typeCandidateReferral');
  useEffect(() => {

  }, [register, unregister, watchCheckboxReferral]);

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
    <div className='page'>
      <Header
        whiteText='Take Action'
        children={[
          <div className='subheading'>
            What can I do to elect Common Sense in New Jersey?
          </div>
        ]}
      />
      <div className='page-content'>
        <ol className={styles.list}>
          <li>
            <span>Alert Us </span>
            to Common Sense Candidates
          </li>
          <li>
            <span>Volunteer </span>
            to Help Common Sense Candidates
          </li>
          <li>
            <span>Join </span>
            Your County Effort
          </li>
          <li>
            <span>Donate </span>
            to Elect Common Sense Candidates
          </li>
        </ol>
        <div className={styles.cta}>
          <div>Don't let Common Sense Candidates be outspent by the lunatics!</div>
          <a href='https://secure.winred.com/elect-common-sense/website'>
            <button>Donate Today</button>
          </a>
        </div>
        <p>I know a Common Sense Candidate!</p>
        <p>
          We would love to hear about potential candidates you recommend in your area! Thank for alerting us!
        </p>

        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
          <div>Select all that apply:</div>
          {/* REFERRAL CHECKBOX */}
          <div className='checkbox-wrapper'>
            <input
              id='typeCandidateReferral'
              type="checkbox"
              {...register('typeCandidateReferral', { required: true })}
              aria-invalid={errors.typeCandidateReferral ? "true" : "false"}
            />
            <label htmlFor="typeCandidateReferral">I know a Common Sense Candidate!</label>
          </div>
          {errors.typeCandidateReferral?.type === 'required'
            && <div role="alert">Opt-in is required</div>}

          {/* VOLUNTEER CHECKBOX */}
          <div className='checkbox-wrapper'>
            <input
              id='volunteer'
              type="checkbox"
              {...register('typeCandidateReferral', { required: true })}
              aria-invalid={errors.typeCandidateReferral ? "true" : "false"}
            />
            <label htmlFor="volunteer">I want to volunteer!</label>
          </div>
          {errors.typeCandidateReferral?.type === 'required'
            && <div role="alert">Opt-in is required</div>}

          {/* GRASSROOTS CHECKBOX */}
          <div className='checkbox-wrapper'>
            <input
              id='grassroots'
              type="checkbox"
              {...register('typeCandidateReferral', { required: true })}
              aria-invalid={errors.typeCandidateReferral ? "true" : "false"}
            />
            <label htmlFor="grassroots">I know a Common Sense Candidate!</label>
          </div>
          {errors.typeCandidateReferral?.type === 'required'
            && <div role="alert">Opt-in is required</div>}

          <div className={styles.divider} />

          {/* FIRST NAME INPUT */}
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

          {/* LAST NAME INPUT */}
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            {...register('lastName', { required: false, maxLength: 20 })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === 'maxLength'
            && <div role="alert">Length cannot exceed 20 characters</div>}

          {/* EMAIL INPUT */}
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

          {/* ZIP CODE INPUT */}
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

          {/* MOBILE INPUT */}
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

          {/* MESSAGE INPUT */}
          <label htmlFor="message">Add your message</label>
          <textarea
            {...register('message', { required: false, maxLength: 300 })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message?.type === 'maxLength'
            && <div role="alert">Length cannot exceed 300 characters</div>}

          {/* SUBMIT BUTTON */}
          <input
            type="submit"
          />
          <a href='#'>Back to top</a>
        </form>
      </div>
    </div>
  );
}
