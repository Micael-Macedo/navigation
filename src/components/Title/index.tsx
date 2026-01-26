import { Text, TextProps } from 'react-native'
import { styles } from './style';

export default function Title({children, ...rest}: TextProps) {
    return (
        <Text style={styles.container} {...rest} >{children}</Text>
    );
};
