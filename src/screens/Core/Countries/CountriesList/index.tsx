import {Table} from '@components';
import {extractCountryValues} from '@utils';
import {SafeAreaView, ScrollView} from 'react-native';

import countries from './countries.json';
import styles from './styles';

const tableHeader = ['Name', 'Capital', 'Region'];

export function CountriesList(): JSX.Element {
  const tableData = extractCountryValues(countries);

  return (
    <SafeAreaView style={styles.viewMain}>
      <ScrollView
        contentContainerStyle={styles.scrollViewSettings}
        showsVerticalScrollIndicator={false}>
        <Table tableData={tableData} tableHeader={tableHeader} />
      </ScrollView>
    </SafeAreaView>
  );
}
