import {PressableProps} from 'react-native';

type Props = PressableProps & {
  description: string;
  isActive?: boolean;
  label: string;
};

export default Props;
