import { Profile } from 'components/settings/profile';
import TabLayout from 'layout/tabSection';

export const Settings = () => {
  return (
    <TabLayout tabs={['Edit Profile', 'Preferences', 'Security']}>
      <Profile />
      <div className="w-full min-h-[300px] grid place-content-center">
        Preferences
      </div>
      <div className="w-full min-h-[300px] grid place-content-center">
        Security
      </div>
    </TabLayout>
  );
};

export default Settings;
