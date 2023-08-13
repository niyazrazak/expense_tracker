import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, HStack, Heading, Spinner, Stack } from "@chakra-ui/react"
import { useFrappeGetDocList } from "frappe-react-sdk"

export const ExpenseListTab = () => {
    const {data, isLoading, error, mutate} = useFrappeGetDocList("Expense Record", {
        fields:['name', 'formatted_amount', 'description', 'remarks', 'type']
    })
    console.log(data, isLoading, error, mutate);
    
    return (
        <Stack>
            <HStack justify={"space-between"}>
                <Heading as="h3" fontSize={"xl"}>Expenses</Heading>
                <Box>
                    <Button colorScheme="blue">Add</Button>
                </Box>
            </HStack>
            {isLoading && <Center h='40vh'><Spinner/></Center>}
            {error && <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>{error.exception}</AlertTitle>
                    <AlertDescription>{error.httpStatusText} {error.httpStatus}</AlertDescription>
                </Alert>}
        </Stack>
    )
}