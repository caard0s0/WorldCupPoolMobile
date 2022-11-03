import { Heading, VStack } from "native-base";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Find() {
    return (
        <VStack flex={1} bgColor="gray.900">

            <Header title="Search by code" showBackButton />

            <VStack mt={8} mx={5} alignItems="center">

                <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
                    Find a pool using {'\n'} your unique code
                </Heading>

                <Input 
                    mb={2}
                    placeholder="What is the code of your pool?"
                />

                <Button 
                    title="SEARCH POOL"
                />

            </VStack>

        </VStack>
    )
}