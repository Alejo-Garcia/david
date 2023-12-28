import {ActivityIndicator, StatusIndicator, Table} from '@components';
import {useHeaderTitle} from '@hooks';
import {extractCountryValues} from '@utils';
import useAxios from 'axios-hooks';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView} from 'react-native';

import styles from './styles';

const queryFields = ['name', 'capital', 'subregion'];

export function CountriesList(): JSX.Element {
  const {t} = useTranslation();

  const [{data, error, loading}, refetch] = useAxios(
    `/all?fields=${queryFields.join(',')}`,
  );

  useHeaderTitle('CORE.COUNTRIES.COUNTRIES_LIST.HEADER__TITLE');

  const tableHeader = [
    t('CORE.COUNTRIES.COUNTRIES_LIST.TABLE_HEADER__NAME'),
    t('CORE.COUNTRIES.COUNTRIES_LIST.TABLE_HEADER__CAPITAL'),
    t('CORE.COUNTRIES.COUNTRIES_LIST.TABLE_HEADER__REGION'),
  ];

  return (
    <SafeAreaView style={styles.viewMain} testID={'countriesListScreen'}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollViewSettings,
          (loading || error) && styles.scrollViewSettingsStatus,
        ]}
        scrollEnabled={!loading || !error}
        showsVerticalScrollIndicator={false}
        testID={'countriesListScrollView'}>
        {loading ? (
          <ActivityIndicator color={'#F12C4C'} size={'large'} />
        ) : error ? (
          <StatusIndicator
            buttonIcon={'refresh-outline'}
            buttonLabel={t('CORE.COUNTRIES.COUNTRIES_LIST.BUTTON__ERROR')}
            buttonOnPress={() => refetch()}
            label={t('CORE.COUNTRIES.COUNTRIES_LIST.TEXT__ERROR')}
          />
        ) : (
          <Table
            tableData={extractCountryValues(data)}
            tableHeader={tableHeader}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
