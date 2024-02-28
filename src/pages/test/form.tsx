import { FormEvent } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function FormTest() {
  const { register, watch, handleSubmit } = useForm();

  console.log(watch());
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="mt-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="test1">test1</label>
            <input
              type="text"
              id="test1"
              className="bg-black"
              {...register('test1')}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="test2">test2</label>
            <input name="test2" id="test2" type="text" className="bg-black" />
          </div>
          <div className="mt-2">
            <label htmlFor="test3">test3</label>
            <input name="test3" id="test3" type="text" className="bg-black" />
          </div>
          <button type="submit">Sumbit</button>
        </form>
      </div>
    </>
  );
}
