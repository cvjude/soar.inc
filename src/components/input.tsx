import { Chevron } from 'assets/chevron';
import { Eye } from 'assets/eye';
import { Hide } from 'assets/hide';
import classNames from 'classnames';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from 'utils/helpers';

interface InputProps {
  type?: string;
  name: string;
  label?: string;
  value?: string;
  errorMsg?: string;
  valErrorMsg?: string;
  required?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordReviel?: () => void;
  attr?: any;
  open?: boolean;
  example?: string;
  className?: string;
  errors?: any;
  additionalElement?: any;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  type = 'text',
  name,
  value,
  errorMsg = '',
  valErrorMsg,
  required = false,
  handleChange = () => {
    return;
  },
  onPasswordReviel = () => {
    return;
  },
  attr = {},
  open = false,
  example,
  errors,
  placeholder,
  label,
}) => {
  const inputCon = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    valErrorMsg,
  );
  const [internalValue, setInternalValue] = useState(value);
  const [inputInternalError, setInternalError] = useState<boolean>();
  const [showPassword, setShowPassword] = useState(false);

  const error = useMemo(
    () => (typeof errors?.[name] !== 'string' && errors?.[name] ? true : false),
    [errors?.[name]],
  );
  const submitted = useMemo(() => errors?.onSubmit, [errors?.onSubmit]);

  useEffect(() => {
    if (internalValue === '' || !internalValue) {
      if ((submitted && required) || (error && required)) {
        setInternalError(true);

        inputCon?.current?.classList.add('border-debit-red!');
        setErrorMessage(errorMsg);
      }

      if (errors?.reset) {
        inputCon?.current?.classList.remove('border-debit-red!');
        setInternalError(false);
      }

      inputCon?.current?.classList.remove('border-pale-blue-300!');
    } else {
      setInternalError(false);

      if (error) {
        inputCon?.current?.classList.add('border-debit-red!');
        inputCon?.current?.classList.remove('border-pale-blue-300!');
        setErrorMessage(valErrorMsg);
      } else {
        inputCon?.current?.classList.add('border-pale-blue-300!');
        inputCon?.current?.classList.remove('border-debit-red!');
        setErrorMessage(null);
      }
    }
  }, [open, error, internalValue, submitted, errors?.reset]);

  const validateOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    setInternalValue(event.target.value);
  };

  return (
    <div className="input w-full">
      <div
        className="bg-transparent w-full outline-none flex flex-col pb-4 relative"
        ref={inputCon}
      >
        <p className="text-xs md:text-base text-dark-500 mb-2.5">{label}</p>

        <div className="relative w-full">
          {type !== 'date' && (
            <input
              className={classNames(
                'rounded-[15px] border border-pale-blue-300 relative py-3 px-5 text-xs md:text-base text-pale-blue-500 placeholder:text-pale-blue-500 w-full',
                {
                  'pr-12':
                    type.includes('password') && (value || internalValue),
                },
              )}
              required={required}
              name={name}
              onChange={validateOne}
              value={value}
              ref={inputRef}
              {...attr}
              placeholder={example || placeholder || ''}
              type={showPassword ? 'text' : type}
              id={name}
            />
          )}

          {(value || internalValue) && type.includes('password') ? (
            <span
              onClick={() => {
                setShowPassword(!showPassword);
                onPasswordReviel();
              }}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={() => {
                //
              }}
            >
              {!showPassword ? (
                <Eye className="fill-current text-pale-blue-500 w-5 h-5" />
              ) : (
                <Hide className="fill-current text-pale-blue-500 w-5 h-5" />
              )}
            </span>
          ) : null}
        </div>

        {type === 'date' && (
          <DatePicker
            selected={new Date()}
            onChange={(date) => {
              const syntheticEvent = {
                target: {
                  value: date?.toLocaleDateString() as string,
                  name,
                },
              } as React.ChangeEvent<HTMLInputElement>;
              validateOne(syntheticEvent);
            }}
            dateFormat="dd/MM/yyyy"
            showMonthDropdown
            showYearDropdown
            customInput={
              <div className="rounded-[15px] border border-pale-blue-300 relative py-3 px-5 text-xs md:text-base text-pale-blue-500 cursor-pointer flex justify-between items-center">
                {formatDate(value || internalValue || '26/01/1990')}

                <Chevron className="stroke-current text-pale-blue-500 rotate-90" />
              </div>
            }
          />
        )}

        <p
          className={classNames(
            'error',
            'mr-2.5 text-debit-red text-[12px] bg-inherit absolute -bottom-1 right-0',
          )}
          style={{ display: error || inputInternalError ? 'block' : 'none' }}
        >
          {errorMessage as string}
        </p>
      </div>
    </div>
  );
};
