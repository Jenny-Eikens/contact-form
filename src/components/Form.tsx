import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  fname: string;
  lastname: string;
  email: string;
  query: any;
  message: any;
  consent: any;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  const successIcon = (
    <svg
      className="mr-2"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="18"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill="#fff"
        d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
      />
    </svg>
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className="form-wrapper pb-2">
        {isSubmitted && (
          <div className="success-message w-[85vw] max-w-[350px] justify-start rounded-[10px] bg-dark-gray p-4 pl-5 text-white">
            <span className="flex items-center">
              {successIcon}
              <h1 className="text-sm font-bold leading-7">Message Sent!</h1>
            </span>
            <p className="pb-1 text-xs text-light-green">
              Thanks for completing the form. We'll be in touch soon!
            </p>
          </div>
        )}

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          id="grid-form"
          className="grid gap-2 rounded-[10px] bg-white p-6"
        >
          <h1 className="mb-2 text-2xl font-bold text-dark-gray">Contact Us</h1>

          <section id="name">
            <div id="firsname-div" className="mb-2 flex flex-col">
              <label htmlFor="fname">
                First Name <span className="star">*</span>
              </label>
              <input
                {...register("fname", {
                  required: "This field is required",
                  pattern: {
                    value: /^[\p{L}\p{M}\s'-]+$/u,
                    message: "Name must only contain letters",
                  },
                })}
                className={errors.fname && "border-warning-red"}
                type="text"
                id="fname"
                name="fname"
                aria-describedby="firstname-error"
                aria-invalid={errors.fname ? "true" : "false"}
              />
              {errors.fname && (
                <p id="firstname-error" className="error-message">
                  {errors.fname.message}
                </p>
              )}
            </div>

            <div id="lastname-div" className="mb-2 flex flex-col">
              <label htmlFor="lastname">
                Last Name <span className="star">*</span>
              </label>
              <input
                {...register("lastname", {
                  required: "This field is required",
                  pattern: {
                    value: /^[\p{L}\p{M}\s'-]+$/u,
                    message: "Name must only contain letters",
                  },
                })}
                className={errors.lastname && "border-warning-red"}
                type="text"
                id="lastname"
                name="lastname"
                aria-describedby="lastname-error"
                aria-invalid={errors.lastname ? "true" : "false"}
              />
              {errors.lastname && (
                <p id="lastname-error" className="error-message">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </section>

          <section id="email" className="mb-2 flex flex-col">
            <label htmlFor="email">
              Email Address <span className="star">*</span>
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              className={errors.email && "border-warning-red"}
              type="email"
              id="email"
              name="email"
              placeholder="email#example.com"
              aria-describedby="email-error"
              aria-invalid={errors.email ? "true" : "false"}
            ></input>
            {errors.email && (
              <p id="email-error" className="error-message">
                Please enter a valid email address
              </p>
            )}
          </section>

          <section id="query" className="mb-2">
            <fieldset>
              <legend>
                Query Type <span className="star">*</span>
              </legend>
              <div className="query-wrapper">
                <div className="query-field flex items-center">
                  <input
                    {...register("query", { required: true })}
                    className="cursor-pointer"
                    type="radio"
                    id="general"
                    name="query"
                    value="general query"
                    aria-describedby="query-error"
                    aria-invalid={errors.query ? "true" : "false"}
                  />
                  <label htmlFor="general" className="mb-0 ml-2 text-base">
                    General Enquiry
                  </label>
                </div>
                <div className="query-field flex items-center">
                  <input
                    {...register("query")}
                    className="cursor-pointer"
                    type="radio"
                    id="support"
                    name="query"
                    value="support request"
                  />
                  <label htmlFor="support" className="mb-0 ml-2 text-base">
                    Support Request
                  </label>
                </div>
              </div>
              {errors.query && (
                <p id="query-error" className="error-message flex flex-col">
                  Please select a query type
                </p>
              )}
            </fieldset>
          </section>

          <section id="message" className="mb-2 flex flex-col">
            <label htmlFor="message">
              Message <span className="star">*</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              className={`h-36 resize-none overflow-hidden md:h-28 lg:h-24 ${
                errors.message && "border-warning-red"
              }`}
              id="message"
              name="message"
              aria-describedby="message-error"
              aria-invalid={errors.message ? "true" : "false"}
            ></textarea>
            {errors.message && (
              <p id="message-error" className="error-message">
                This field is required
              </p>
            )}
          </section>

          <section id="finish" className="flex flex-col">
            <div className="mb-3 mt-3 flex w-[90%] items-center">
              <input
                {...register("consent", { required: true })}
                className="cursor-pointer checked:accent-medium-green"
                type="checkbox"
                id="consent"
                name="consent"
                aria-describedby="checkbox-error"
                value="consent given"
                aria-invalid={errors.consent ? "true" : "false"}
              />
              <label htmlFor="consent" className="mb-0 ml-3">
                I consent to being contacted by the team{" "}
                <span className="star">*</span>
              </label>
            </div>
            <div>
              {errors.consent && (
                <p id="checkbox-error" className="error-message">
                  To submit this form, please consent to being contacted
                </p>
              )}
            </div>

            <input
              type="submit"
              id="submit-button"
              name="submit-button"
              value="Submit"
              className="mt-4 cursor-pointer border-0 bg-medium-green font-bold text-white transition-all duration-150 ease-in-out hover:border-0 hover:bg-dark-gray focus:bg-dark-gray focus:outline-none"
            />
          </section>
        </form>
      </div>
    </>
  );
}