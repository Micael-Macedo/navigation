import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';


type Props = TouchableOpacityProps & {
    name: keyof typeof MaterialIcons.glyphMap
}

export default function ButtonIcon({name, ...rest}: Props) {
    return (
        <TouchableOpacity {...rest} style={styles.container}>
            <MaterialIcons name={name} size={32} color="black" />
        </TouchableOpacity>
    );
};
