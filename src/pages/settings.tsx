import { Profile } from 'components/settings/profile';
import TabLayout from 'layout/tabSection';

export const Settings = () => {
  return (
    <TabLayout tabs={['Edit Profile', 'Preferences', 'Security']}>
      <Profile />
      <div>Preferences</div>
      <div>Security</div>
    </TabLayout>
  );
};

export default Settings;
