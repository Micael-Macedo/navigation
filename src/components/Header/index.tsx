import { View } from 'react-native'
import { styles } from './style';

export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
