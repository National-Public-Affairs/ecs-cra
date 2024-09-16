/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
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
  mobile: string;
  message?: string;
  doorKnocking: boolean;
  phoneBanking: boolean;
  writingPostcards: boolean;
  literatureDrops: boolean;
  signPlacement: boolean;
  hostingAnEvent: boolean;
}

export default function TakeAction() {
  const navigate = useNavigate();

  const [checkboxError, setCheckboxError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>();
  const watchCheckboxes = watch([
    'typeCandidateReferral', // 0
    'typeVolunteering', // 1
    'typeGrassroots', // 2
  ]);

  const onSubmit = async (data: FormData) => {
    // if no checkboxes selected; stops submission
    if (!watchCheckboxes[0] && !watchCheckboxes[1] && !watchCheckboxes[2]) {
      setCheckboxError(true);
      return;
    } else {
      setCheckboxError(false);
    }
    console.log('DATA', data)
    const toastId = toast.loading('Submitting...');
    try {
      await fetch('/submit-action', {
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

        {/* ---------------------------------------------------------------- */}
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
          <div>Select all that apply
            <i> (pick at least one)</i>
            :
            {checkboxError && (
              <div role="alert">You must pick at least one</div>
            )}
          </div>
          {/* REFERRAL CHECKBOX */}
          <div className='checkbox-wrapper'>
            <input
              id='typeCandidateReferral'
              type="checkbox"
              {...register('typeCandidateReferral')}
            />
            <label htmlFor="typeCandidateReferral">I know a Common Sense Candidate!</label>
          </div>

          {/* VOLUNTEER CHECKBOX */}
          <div className='checkbox-wrapper'>
            <input
              id='volunteer'
              type="checkbox"
              {...register('typeVolunteering')}
            />
            <label htmlFor="volunteer">I want to volunteer!</label>
          </div>

          {/* GRASSROOTS CHECKBOX */}
          <div className='checkbox-wrapper'>
            <input
              id='grassroots'
              type="checkbox"
              {...register('typeGrassroots')}
            />
            <label htmlFor="grassroots">I want to join my county!</label>
          </div>

          {/* -------------------------------------------------------------- */}
          {(watchCheckboxes[0] || watchCheckboxes[1] || watchCheckboxes[2]) && (
            <div className={styles.formMsg}>
              {watchCheckboxes[0] && (
                <p>
                  We would love to hear about potential candidates you recommend
                  in your area! Thank you for alerting us.
                </p>
              )}
              {watchCheckboxes[1] && (
                <p>
                  We need manpower in every corner of the state to help us elect
                  Common Sense candidates. Whether you have 5 minutes, 5 hours,
                  or 5 days, we have a place for you.
                </p>
              )}
              {watchCheckboxes[2] && (
                <p>
                  We’re building a grassroots force in every county across New
                  Jersey. Let us know if you’d like to be connected with yours.
                </p>
              )}
            </div>
          )}

          {/* -------------------------------------------------------------- */}
          {/* FIRST NAME INPUT */}
          <label htmlFor="firstName">
            First Name
            <span> *</span>
          </label>
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
          <label htmlFor="lastName">
            Last Name
            <span> *</span>
          </label>
          <input
            type="text"
            {...register('lastName', { required: false, maxLength: 20 })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === 'maxLength'
            && <div role="alert">Length cannot exceed 20 characters</div>}

          {/* EMAIL INPUT */}
          <label htmlFor="email">
            Email
            <span> *</span>
          </label>
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
          <label htmlFor="zip">
            ZIP Code
            <span> *</span>
          </label>
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
          <label htmlFor="mobile">
            Mobile
            <span> *</span>
          </label>
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
          {(watchCheckboxes[0] || watchCheckboxes[2]) && (
            <>
              <label htmlFor="message">
                Add your message
                {watchCheckboxes[0] && (
                  <>
                    <br />
                    <i>
                      Describe this potential candidate, what office you think they’d be a fit for, and how they will advance Common Sense in New Jersey!
                    </i>
                  </>
                )}
              </label>
              <textarea
                {...register('message', { required: false, maxLength: 300 })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message?.type === 'maxLength'
                && <div role="alert">Length cannot exceed 300 characters</div>}
            </>
          )}

          {/* -------------------------------------------------------------- */}
          {watchCheckboxes[1] && (
            <>
              {/* VOLUNTEER INTERESTS: DOOR KNOCKING */}
              <label>I am interested in:</label>
              <div className='checkbox-wrapper indent'>
                <input
                  id='door-knocking'
                  type="checkbox"
                  {...register('doorKnocking')}
                />
                <label htmlFor="door-knocking">Door knocking</label>
              </div>

              {/* VOLUNTEER INTERESTS: PHONE BANKING */}
              <div className='checkbox-wrapper indent'>
                <input
                  id='phone-banking'
                  type="checkbox"
                  {...register('phoneBanking')}
                />
                <label htmlFor="phone-banking">Phone banking</label>
              </div>

              {/* VOLUNTEER INTERESTS: WRITING POSTCARDS */}
              <div className='checkbox-wrapper indent'>
                <input
                  id="writing-postcards"
                  type="checkbox"
                  {...register('writingPostcards')}
                />
                <label htmlFor="writing-postcards">Writing postcards</label>
              </div>

              {/* VOLUNTEER INTERESTS: LITERATURE DROPS */}
              <div className='checkbox-wrapper indent'>
                <input
                  id="literature-drops"
                  type="checkbox"
                  {...register('literatureDrops')}
                />
                <label htmlFor="literature-drops">Literature drops</label>
              </div>

              {/* VOLUNTEER INTERESTS: SIGN PLACEMENT */}
              <div className='checkbox-wrapper indent'>
                <input
                  id="sign-placement"
                  type="checkbox"
                  {...register('signPlacement')}
                />
                <label htmlFor="sign-placement">Sign placement</label>
              </div>

              {/* VOLUNTEER INTERESTS: HOSTING AN EVENT */}
              <div className='checkbox-wrapper indent'>
                <input
                  id="hosting-an-event"
                  type="checkbox"
                  {...register('hostingAnEvent')}
                />
                <label htmlFor="hosting-an-event">Hosting an event</label>
              </div>
            </>
          )}

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
