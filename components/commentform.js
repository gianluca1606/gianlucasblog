import React, { useState } from "react";
import { useForm } from "react-hook-form";
function CommentForm({ _id }) {
  // Sets up basic data state
  const [formData, setFormData] = useState();

  // Sets up our form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Prepares the functions from react-hook-form
  const { register, handleSubmit, watch, errors } = useForm();

  // Function for handling the form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    setFormData(data);

    try {
      await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    // Returns a "Submitting comment" state if being processed
    return <h3 className='text-white'>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    // Returns the data that the user submitted for them to preview after submission
    return (
      <>
        <h3>Thanks for your comment! Wait for approval</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg ' disabled>
      <input ref={register} type='hidden' name='_id' value={_id} />

      <label className='block mb-5 text-white'>
        <span className=''>Name</span>
        <input
          name='name'
          ref={register({ required: true })}
          className='block w-full mt-1 text-black form-input'
          placeholder='John Appleseed'
        />
      </label>

      <label className='block mb-5 text-white'>
        <span className=''>Email</span>
        <input
          name='email'
          type='email'
          ref={register({ required: true })}
          className='block w-full mt-1 text-black form-input'
          placeholder='your@email.com'
        />
      </label>

      <label className='block mb-5'>
        <span className='text-white'>Comment</span>
        <textarea
          ref={register({ required: true })}
          name='comment'
          className='block w-full mt-1 text-black form-textarea'
          rows='8'
          placeholder='Enter your message.'
        ></textarea>
      </label>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span class='text-red-500'>This field is required</span>}

      <button
        type='submit'
        className='px-4 py-2 font-bold text-white bg-indigo-500 rounded shadow hover:bg-indigo-800 focus:shadow-outline focus:outline-none'
      >
        Send comment
      </button>
    </form>
  );
}

export default CommentForm;
