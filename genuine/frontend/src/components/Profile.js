import React from "react"
import {
    Box,
    Button,
    Container,
    FormLabel,
    Input,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material"

const Profile = () => {
    return (
        <Container>
            <Stack direction="row" marginBottom="1.5rem">
                <Container>
                    <Typography variant="h1" fontSize="1.5rem">
                        Nova Scotia Bird Society
                    </Typography>
                    <p>Registered Name: NOVA SCOTIA BIRD SOCIETY</p>
                    <Stack direction="row" gap={4} width="full">
                        <p>Business No: 873023550RR0001</p>
                        <p>CRA Registered</p>
                    </Stack>
                </Container>
                <Container
                    sx={{
                        padding: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: "0 .1875rem .625rem #bdc3cf",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontSize="1.5rem"
                        fontWeight="bold"
                        marginBottom="1rem"
                        textAlign="center"
                    >
                        DONATE TO THIS CHARITY
                    </Typography>
                    <Stack direction="row" justifyContent="center" gap={2} marginY="1rem">
                        <Button variant="contained">Donate Now</Button>
                        <Button>Donate Monthly</Button>
                        <Button>Donate Securities</Button>
                    </Stack>
                    <Container sx={{marginBottom: ''}}>
                        <Stack marginBottom="1rem">
                            <FormLabel sx={{fontWeight: 'bold'}} htmlFor="amount" required>
                                Donation Amount
                            </FormLabel>
                            <Input type="number" placeholder="Enter Amount" />
                        </Stack>
                        <Stack marginBottom="1rem">
                            <FormLabel sx={{fontWeight: 'bold'}} htmlFor="amount">
                                Send a message to this charity (Optional)
                            </FormLabel>
                            <Input type="text" />
                        </Stack>
                    </Container>
                    <Button variant="contained">Continue to Complete Donation</Button>
                </Container>
            </Stack>
            <Container
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <Typography
                    variant="h4"
                    fontSize="1.5rem"
                    fontWeight="bold"
                    marginBottom="1rem"
                >
                    ABOUT
                </Typography>
                <Container>
                    <Typography variant="body1" marginBottom="1rem">
                        The Nova Scotia Bird Society has been a focus for birders in this
                        province for over 65 years. Serving about 600 members, we have
                        much to offer anyone interested in wild birds. Browse through our
                        website for a sample of what we do, and feel free to send us an
                        e-mail if you would like more information.
                    </Typography>
                    <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">
                        Vision
                    </Typography>
                    <Typography variant="body1" marginBottom="1rem">
                        We are a mutually respectful, supportive community of people who
                        share a passion for birds and birding.
                    </Typography>
                    <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">
                        Mission
                    </Typography>
                    <Typography variant="body1" marginBottom="1rem">
                        To foster the appreciation, knowledge, and conservation of birds
                        in Nova Scotia.
                    </Typography>
                    <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">
                        Core Values
                    </Typography>
                    <Typography variant="body1" marginBottom="1rem">
                        The inclusion of all people with an interest in birds and birding,
                        regardless of their expertise
                    </Typography>
                    <List marginBottom="1rem">
                        <ListItem sx={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
                            Commitment to science-based information and education
                        </ListItem>
                        <ListItem sx={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
                            Collaboration with other groups and organizations
                        </ListItem>
                    </List>
                    <Typography variant="h5" fontSize="1.1rem" fontWeight="bold">
                        Goals
                    </Typography>
                    <List>
                        <ListItem sx={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
                            To gather and disseminate information related to trends,
                            distribution, behaviour, and identification of birds in Nova
                            Scotia
                        </ListItem>
                        <ListItem sx={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
                            To promote research and conservation of Nova Scotia’s birds
                        </ListItem>
                        <ListItem sx={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
                            To maintain an official list of Nova Scotia birds
                        </ListItem>
                        <ListItem sx={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
                            To promote youth participation in birding
                        </ListItem>
                    </List>
                </Container>
            </Container>
        </Container>
    )
}

export default Profile
