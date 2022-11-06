import { useState } from 'react';
import { Heading, VStack, Text, useToast } from "native-base";

import { api } from '../services/api';

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import Logo from '../assets/logo.svg';

export function New() {

    const [ title, setTitle ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const toast = useToast();

    async function handlePoolCreate() {
        if (!title.trim()) {
            return toast.show({
                title: 'Enter a name for your pool!',
                placement: 'top',
                bgColor: 'red.500'
            });
        }

        try {
            setIsLoading(true);

            await api.post('/pools', { title: title })

            toast.show({
                title: 'Pool created successfully!',
                placement: 'top',
                bgColor: 'green.500'
            });

            setTitle('');

        } catch (error) {
            console.log(error);

            toast.show({
                title: 'Oops, Unable to create the pool',
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <VStack flex={1} bgColor="gray.900">

            <Header title="Create new pool" onShare={null} />

            <VStack mt={8} mx={5} alignItems="center">

                <Logo />

                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                    Create your own cup pool and share it with friends!
                </Heading>

                <Input 
                    mb={2}
                    placeholder="What is the name of your pool?"
                    onChangeText={setTitle}
                    value={title}
                />

                <Button 
                    title="CREATE MY POOL"
                    onPress={handlePoolCreate}
                    isLoading={isLoading}
                />

                <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
                    After creating your pool, you will receive a unique code that you can use to invite other people.
                </Text>

            </VStack>

        </VStack>
    )
}