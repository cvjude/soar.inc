import { parse, format } from 'date-fns';
import { toast } from 'react-toastify';

const freeText = /[^\n]{2,}/;
const email =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:]|])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:)+)\])/;

const patterns: {
  [key: string]: RegExp;
} = {
  fullName: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
  email,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  dateOfBirth: /^\d{2}\/\d{2}\/\d{4}$/,
  userName: /^[a-zA-Z0-9]{3,}$/,
  presentAddress: freeText,
  permanentAddress: freeText,
  city: freeText,
  postalCode: /^\d{5}$/,
  country: freeText,
  picture: freeText,
};

export const validate = (field: string, Regex: string): boolean => {
  if (patterns[Regex]?.test(field)) return true;
  return false;
};

export const formatAmount = (price: string) => {
  const amount = parseFloat(price);
  const hasDecimals = amount % 1 !== 0;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  }).format(amount);

  return formattedPrice;
};

export function handleError(error: unknown) {
  let message = 'An unknown error occurred';

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  }

  toast.error(message, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number,
) => {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const isVisible = function (ele: any, container: any) {
  const eleTop = ele.offsetTop;
  const eleBottom = eleTop + ele.clientHeight;

  const containerTop = container.scrollTop;
  const containerBottom = containerTop + container.clientHeight;

  return (
    (eleTop >= containerTop && eleBottom <= containerBottom) ||
    (eleTop < containerTop && containerTop < eleBottom) ||
    (eleTop < containerBottom && containerBottom < eleBottom)
  );
};

export const formatDate = (date: string) => {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
  // const adjustedDate = subDays(parsedDate, 1);
  const formattedDate = format(parsedDate, 'dd MMMM yyyy');
  return formattedDate;
};
