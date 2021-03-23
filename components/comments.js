import { Fragment } from "react";
import Date from "./date";

export function Comments({ comments = [] }) {
  return (
    <Fragment>
      {comments.length > 0 && (
        <h2 className='mt-10 mb-4 text-4xl leading-tight text-white lg:text-6xl'>
          Comments:
        </h2>
      )}
      <ul className='text-white'>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className='mb-5'>
            <hr className='mb-5' />
            <h4 className='mb-2 leading-tight'>
              <a href={`mailto:${email}`}>{name}</a> (
              <Date dateString={_createdAt} />)
            </h4>
            <p>{comment}</p>
            <hr className='mt-5 mb-5' />
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
