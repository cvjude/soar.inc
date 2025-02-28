import { useProfileSchema } from 'constants/form';
import { Input } from 'components/input';
import { Loader } from 'components/loader';
import { useForm } from 'hooks/useForm';
import { useRef } from 'react';

export const Profile = () => {
  const submitButton = useRef<HTMLButtonElement>(null);

  const { handleSubmit, handleChange, inputTypes, errors, loading } = useForm({
    submitButton,
    inputs: useProfileSchema,
    cb: async (inputs: Array<{ [key: string]: any }>) => {
      // do something here
      console.log(inputs);
    },
  });

  return (
    <div className="bg-white rounded-xl p-10 max-w-xl">
      <form className="flex flex-col items-center">
        {useProfileSchema.map((form, i) => (
          <Input
            className="mb-5"
            key={`contact_us_form${i}`}
            name={form.name}
            type={form.type}
            label={form.label}
            value={inputTypes[form.name]}
            errorMsg={form.errorMsg}
            required={form.required}
            handleChange={handleChange}
            errors={errors}
            valErrorMsg={form.valErrorMsg}
            open={true}
          />
        ))}

        <button
          ref={submitButton}
          onClick={handleSubmit}
          className="btn font-semibold inline-flex tracking-wider relative rounded-lg items-center justify-center"
        >
          Save <Loader className={loading ? 'ml-2' : 'hidden'} />
        </button>
      </form>
    </div>
  );
};
