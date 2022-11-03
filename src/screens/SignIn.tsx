import { Text, Center, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

import Logo from '../assets/logo.svg';

import { Button } from '../components/Button';

export function SignIn() {
    const { signIn, user } = useAuth();

    return (
        <Center flex={1} bgColor="gray.900" p={7}>
            <Logo width={212} height={40} />

            <Button 
                type="SECONDARY"
                title="LOGIN WITH GOOGLE"
                leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
                mt={12}
                onPress={signIn}
            />

            <Text
                color="white"
                textAlign="center"
                mt={4}
            >
                We do not use any information other than {'\n'} your email to create your account.
            </Text>

        </Center>
    )
}