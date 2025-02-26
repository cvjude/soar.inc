import { AuthStateData } from 'utils/types';
import auth from './user';

const reducers = {
  auth,
};

export default reducers;

export interface ReduxStateDataType {
  auth: AuthStateData;
}
