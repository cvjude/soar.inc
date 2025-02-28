import { useProfileSchema } from 'constants/form';
import { Input } from 'components/input';
import { Loader } from 'components/loader';
import { UserAvatar } from 'components/userAvatar';
import { useUser } from 'contexts/userContext';
import { useForm } from 'hooks/useForm';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const Profile = () => {
  const { user, updateUser } = useUser();
  const submitButton = useRef<HTMLButtonElement>(null);

  const { handleSubmit, handleChange, inputTypes, errors, loading } = useForm({
    submitButton,
    inputs: useProfileSchema,
    initials: user,
    cb: async (inputs: any) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(inputs);
      updateUser(inputs);

      toast.success('Profile updated successfully');
    },
  });

  return (
    <form>
      <ToastContainer />
      <div className="flex gap-5 md:gap-14 flex-col md:flex-row">
        <UserAvatar
          name="picture"
          value={inputTypes.picture}
          handleChange={handleChange}
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 flex-1">
          {useProfileSchema.slice(1, 11).map((form, i) => (
            <Input
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
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          ref={submitButton}
          onClick={handleSubmit}
          className="font-medium text-[15px] md:text-[18px] flex rounded-[9px] md:rounded-[15px] items-center justify-center bg-dark-500 text-white py-2.5 md:py-4 w-full md:max-w-[200px] mt- 4 md:mt-10"
        >
          Save <Loader className={loading ? 'ml-2' : 'hidden'} />
        </button>
      </div>
    </form>
  );
};
