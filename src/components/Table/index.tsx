import {View} from 'react-native';
import {Row, Rows, Table as TableRT} from 'react-native-reanimated-table';

import Props from './props';
import styles from './styles';

export function Table({tableData, tableHeader}: Props): JSX.Element {
  return (
    <View style={styles.viewMain}>
      <TableRT borderStyle={styles.tableBorder}>
        <Row
          cellTextStyle={() => styles.rowHeaderCell}
          data={tableHeader}
          style={styles.tableHeader}
          textStyle={styles.rowHeaderText}
        />
        <Rows data={tableData} textStyle={styles.rowBodyText} />
      </TableRT>
    </View>
  );
}
