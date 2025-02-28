import { FETCH_CONTACTS } from 'constants/index';
import { useQuery } from '@tanstack/react-query';
import { PaperPlane } from 'assets/paperPlane';
import { ContactCard, ContactCardSkeleton } from 'components/contactCard';
import { DashbardTitleSection } from 'components/dashbardTitleSection';
import Carousel from 'components/simpleCarousel';
import { fetchContacts } from 'utils/clientSideFuns/queries';

export const QuikTransfer = () => {
  const { data, isLoading } = useQuery({
    queryKey: [FETCH_CONTACTS],
    queryFn: fetchContacts,
  });

  return (
    <div className="col-span-5 xl:col-span-2 flex flex-col">
      <DashbardTitleSection title="Quick Transfer" />

      <div className="lg:bg-white lg:rounded-[25px] lg:shadow md:p-6 2xl:p-12 xl:aspect-[350/235] flex flex-col justify-between min-w-[265px] lg:min-w-auto gap-4 lg:gap-2 flex-1">
        <div>
          {isLoading ? (
            <div className="flex justify-between mr-[50px]">
              {[...Array(3)].map((_, index) => (
                <ContactCardSkeleton key={`contact_card_skeleton_${index}`} />
              ))}
            </div>
          ) : (
            <div className="pr-[50px]">
              <Carousel>
                {data?.map((contact) => (
                  <ContactCard key={contact.id} contact={contact} />
                )) || []}
              </Carousel>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-7 gap-2">
          <p className="text-sm md:text-base text-pale-blue-500 whitespace-nowrap">
            Write Amount
          </p>
          <div className="bg-pale-blue-300 flex rounded-[50px] flex-shrink">
            <input
              type="number"
              className="text-sm md:text-base placeholder:text-pale-blue-500 text-pale-blue-500 max-w-[100px] 2xl:max-w-[150px] pl-5"
              placeholder="Amount"
            />
            <button className="bg-dark-500 text-white flex rounded-[50px] py-3 px-5">
              <span className="text-sm md:text-base mr-3">Send</span>
              <PaperPlane className="fill-current text-white w-4 md:w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
