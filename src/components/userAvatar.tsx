import { FC } from 'react';

interface UserAvatarProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  name,
  value,
  handleChange,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      const syntheticEvent = {
        target: {
          name,
          value: url,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      handleChange(syntheticEvent);
    }
  };

  return (
    <div className="file-upload">
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 mb-4 hidden"
        id={name}
        accept="image/*"
      />

      <div className="relative">
        <img src={value} alt="avatar" className="w-24 h-24 rounded-full" />

        <label
          htmlFor={name}
          className="bg-dark-500 rounded-full w-7 h-7 grid place-content-center absolute bottom-1 right-0 cursor-pointer"
        >
          <img src="/edit.png" alt="Edit Icon" className="w-3.5 h-3.5" />
        </label>
      </div>
    </div>
  );
};
