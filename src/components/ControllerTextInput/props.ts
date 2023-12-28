import {ControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';

type Props = TextInputProps & {
  control: ControllerProps<any>['control'];
  error?: string;
  name: ControllerProps['name'];
};

export default Props;
