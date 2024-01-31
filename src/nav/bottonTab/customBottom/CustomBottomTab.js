import { useNavigation } from '@react-navigation/native'
import { CheckIcon, HStack, Icon, Text, VStack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import CustomIcons from '../../../component/customIcons/CustomIcons'

const CustomBottomTab = (props) => {

    const navigation = useNavigation()
    return (
        <HStack p={4} space={10} justifyContent={'space-around'}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <VStack>
                    <CustomIcons name={'home'} color={'black'} type={'Entypo'} size={'xl'} />
                    <Text>stack</Text>
                </VStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user-logged')}>
                <CustomIcons name={'user'} color={'black'} type={'Entypo'} size={'xl'} />
                <Text>user</Text>
            </TouchableOpacity>
        </HStack>
    )
}

export default CustomBottomTab