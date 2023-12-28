import {PressableProps} from 'react-native';

type Props = PressableProps & {
  icon?: string;
  isLoading?: boolean;
  label: string;
};

export default Props;
