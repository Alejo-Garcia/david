import {Table} from '@components';
import {useHeaderTitle} from '@hooks';
import {extractCountryValues} from '@utils';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';

import countries from './countries.json';
import styles from './styles';

export function CountriesList(): JSX.Element {
  const {t} = useTranslation();

  useHeaderTitle('CORE.COUNTRIES.COUNTRIES_LIST.HEADER__TITLE');

  const tableHeader = [
    t('CORE.COUNTRIES.COUNTRIES_LIST.TABLE_HEADER__NAME'),
    t('CORE.COUNTRIES.COUNTRIES_LIST.TABLE_HEADER__CAPITAL'),
    t('CORE.COUNTRIES.COUNTRIES_LIST.TABLE_HEADER__REGION'),
  ];
  const tableData = extractCountryValues(countries);

  return (
    <SafeAreaView style={styles.viewMain} testID={'countriesListScreen'}>
      <ScrollView
        contentContainerStyle={styles.scrollViewSettings}
        showsVerticalScrollIndicator={false}
        testID={'countriesListScrollView'}>
        <Table tableData={tableData} tableHeader={tableHeader} />
      </ScrollView>
    </SafeAreaView>
  );
}
