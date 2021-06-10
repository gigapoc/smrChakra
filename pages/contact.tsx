import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import { Box, Container, Text, VStack } from "@chakra-ui/layout"
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react"
import { ImUser } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import {IoMdText} from 'react-icons/io'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Router from 'next/router'
import {Logo} from '@components/logo'
import { NextSeo } from 'next-seo';

interface Props {

}

const Contact: React.FC<Props> = ({}) => {

    const [nom, setNom] = useState("")
    const [mail, setMail] = useState("")
    const [objet, setObjet] = useState("")
    const [message, setMessage] = useState("")
    const handleChangeNom = (event) => {
        setNom(event.target.value)
        if (errorNom && nom.length) setErrorNom(false)
    }
    const handleChangeMail = (event) => {
        setMail(event.target.value)
        if (errorMail && validateEmail(mail)) setErrorMail(false)
    }
    const handleChangeObjet = (event) => {
        setObjet(event.target.value)
        if (errorObjet && objet.length) setErrorObjet(false)
    }
    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
        if (errorMessage && message.length < 5) setErrorMessage(false)
    }

    const [errorNom, setErrorNom] = useState(false)
    const [errorMail, setErrorMail] = useState(false)
    const [errorObjet, setErrorObjet] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    function validateEmail(email) {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    }

    const [displayPopup, setDisplayPopup] = useState(false);

    const handleValidate = async () => {
        if (!nom.length) setErrorNom(true);
        if (!validateEmail(mail)) setErrorMail(true);
        if (!objet.length) setErrorObjet(true);
        if (message.length < 5) setErrorMessage(true);

        if (!errorNom && !errorMail && !errorMessage && !errorObjet) {
            const headers = new Headers()
            headers.append("Content-Type", "application/json")
            
            const body = {
                nom,
                mail,
                objet,
                message
            }

            const options = {
                method: "POST",
                headers,
                mode: "cors" as RequestMode,
                body: JSON.stringify(body),
            }
            
            await fetch(process.env.NEXT_PUBLIC_URL_SERVER_MAIL, options)

            setDisplayPopup(true);
        }
    }


    return <>
        <NextSeo
        title="Nous contacter"
        description="Utilisez cette page pour nous contacter !"
        />
        <Box bg="main.100" minH="calc(100vh - 100px)" h="calc(100vh - 100px)">
            <Container h="100%" maxW="container.md" p={{md: 20, sm: 5}}>
                <Text color="main.300" textAlign="center" fontWeight="bold" fontSize="2xl">Nous contacter</Text>
                <VStack spacing={4} pt={10}>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none"><ImUser color="#fff"/></InputLeftElement>
                        <Input type="string" placeholder="Nom *" color='#fff' _focus={{borderColor: "main.300"}} isInvalid={errorNom} onChange={handleChangeNom}/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none"><IoMail color="#fff"/></InputLeftElement>
                        <Input type="string" placeholder="Email *" color='#fff' _focus={{borderColor: "main.300"}} isInvalid={errorMail} onChange={handleChangeMail}/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none"><IoMdText color="#fff"/></InputLeftElement>
                        <Input type="string" placeholder="Objet *" color='#fff' _focus={{borderColor: "main.300"}} isInvalid={errorObjet} onChange={handleChangeObjet}/>
                    </InputGroup>
                    <InputGroup>
                        <Textarea type="string" placeholder="Message *" color='#fff' resize="vertical" _focus={{borderColor: "main.300"}} rows={10} isInvalid={errorMessage} onChange={handleChangeMessage}/>
                    </InputGroup>
                    <Button variant="outline" color="main.200" borderColor="main.200" _hover={{color: 'main.100', bg:"main.300", 'borderColor': "main.300"}} onClick={handleValidate}>Envoyer</Button>
                </VStack>
            </Container>
            <Popup open={displayPopup} closeOnDocumentClick onClose={() => window.location.href='/'}>
                <VStack>
                    <Logo />
                    <Text py={10}> Merci pour votre message, nous vous répondrons au plus vite ! </Text>
                    <Button onClick={() => window.location.href='/'} marginBottom={20}>Retour à l'acceuil</Button>
                </VStack>
            </Popup>
        </Box>
    </>
}

export default Contact;