import { Box, Container, Center, Text, Spacer, Flex, Link, HStack, VStack } from "@chakra-ui/layout";
import { Title } from "@components/title";
import { NextSeo } from 'next-seo';
import {ChevronDownIcon, InfoIcon} from "@chakra-ui/icons"
import { GetServerSideProps } from "next";
const { connect } = require("../src/services/connect");
import axios from "axios";


interface Props {
    lien: string;
}

const AdhesionEnLigne: React.FC<Props> = ({lien}) => {
    return <>
        <NextSeo
        title="Adhésion SMR"
        description="Adhérer en ligne au SMR !"
        />
        <Box bg="main.100" minH="calc(100vh - 100px)" color="main.200" id="adhesionPage">
            <Container maxW="container.xl" py={10}>
                

                <Box mb={40} >
                    <Center m={10}>
                        <Title fontSize="lg">Adhésion en ligne</Title>
                    </Center>
                    <Link href="#haWidget" colorScheme="yellow" _hover={{textDecor: "none"}}>
                        <Center m={10} bg="rgba(200,200,200,.2)" p={5} rounded="2xl">
                            <HStack>

                                <Spacer />
                                <Flex flexDir="column" >
                                    
                                    <Text color="main.300" fontSize="xl">Formulaire et tarifs en bas de page</Text>
                                    <Center>
                                        <ChevronDownIcon color="orange.100" className="bounce"/>
                                    </Center>
                                </Flex>
                            </HStack>
                        </Center>
                    </Link>
                    <Text fontSize="lg" fontWeight="bold">Validité de la licence</Text>
                    <Text px={10}>
                        La licence est annuelle et elle est délivrée pour l'année civile. Toutefois, les licences peuvent commencer à être délivrées par les clubs à partir de mi septembre de l'année précédente.
                        <br/>
                        <br/>
                        Ainsi, pour les nouveaux adhérents, les licences souscrites à partir de septembre sont valables dès leur souscription et ce jusqu’ au 31 décembre de l’année suivante. Pour les adhérents déjà licenciés, la licence peut être également souscrite dès septembre mais elle ne prend effet que le 1er janvier de l'année suivante.
                    </Text>
                    <Text px={10}>
                        Pour le renouvellement de la licence, merci de remplir ce questionnaire :
                    </Text>

                    <VStack  className="linkFiles" px={20}>
                        <Flex >
                            <Text mr={10}>Pour les mineurs :</Text>
                            <Link target="_blank" href={"https://assets.senart-multirotor-racing.com/Questionnaire-sante-mineur-2023.pdf"}>Questionnaire personne mineure</Link>
                        </Flex>
                        <Flex>
                            <Text mr={10}>Pour les majeurs :</Text>
                            <Link target="_blank" href={"https://assets.senart-multirotor-racing.com/Questionnaire-sante-majeur-2023.pdf"}>Questionnaire personne majeure</Link>
                        </Flex>
                    </VStack>
                    {/* <Flex flexDir="row" className="linkFiles" px={20}>
                        
                        <Link href={"https://assets.senart-multirotor-racing.com/PJ2-Questionnaire-QS-Sport.pdf"}>Renouvellement de la licence</Link>
                    </Flex>
                     */}
                    
                    <Text fontSize="lg" fontWeight="bold" mt={20}>Le certificat médical</Text>
                    <Text px={10}>
                        La première délivrance d’une licence sportive est subordonnée (Article L 231-2 du code du sport), à la production d’un certificat médical attestant l’absence de contre-indication à la pratique des activités physiques et sportives liées à l‘aéromodélisme. Le médecin de famille est parfaitement habilité à délivrer ce certificat médical que les nouveaux licenciés de la FFAM doivent fournir au moment de leur demande d'adhésion au club. Si cette exigence s'applique à la première délivrance d’une licence "pratiquant loisir ou compétition" elle ne s'applique pas aux licences "encadrement".
                    </Text>
                    <Text px={10}>
                    Le certificat médical doit mentionner spécifiquement l’absence de contre-indication de la pratique du sport ou de la discipline concernée en compétition, il est exigé tous les trois ans, c’est-à-dire lors d’un renouvellement de licence sur trois. Durant la période intermédiaire (2 ans), le licencié renseigne un questionnaire de santé : QS-Sport.
                    <br/>
                    Le QS-SPORT ne doit pas être remis à la fédération lors de la demande de renouvellement de la licence, il est confidentiel et doit être conservé par le licencié. Le sportif ou son représentant légal, doit toutefois attester auprès de la fédération avoir répondu par la négative à chacune des rubriques du QS-SPORT. L’attestation sera remplie et signée par le licencié et remise au club.
                    </Text>
                    <Text px={10}>
                    Le certificat médical devra être mis en ligne par le club ou le licencié lui-même sur la fiche licencié. La date du certificat médical, ainsi que les nom et prénom du médecin devront être renseignés.
                    </Text>
                    <Text px={10}>
                        Le certificat médical est à télécharger ici :
                    </Text>
                    <HStack className="linkFiles" px={20} spacing="32px" >
                        <Link target="_blank" href={"https://assets.senart-multirotor-racing.com/PJ1-Certificat-medical-aeromodelisme.doc"}>Certificat médical</Link>
                        <Link target="_blank" href={"https://assets.senart-multirotor-racing.com/PJ3-Attestation-sante-licence-FFAM.doc"}>Certificat médical si renouvellement</Link>
                    </HStack>

                    <Text fontSize="lg" fontWeight="bold" mt={20}>L'assurance</Text>
                    <Text px={10}>
                    La licence est assortie d'une assurance couvrant très largement le licencié dans la pratique de toutes les activités liées à l'aéromodélisme :
                    <br/>
                    elle comprend un volet Responsabilité Civile qui vise à indemniser les tiers victime de dommages corporels ou matériels causés par un licencié et un volet Individuelle Accident qui couvre les blessures subies par le licencié dans le cadre de la pratique d'une activité d'aéromodélisme.
                    <br/>
                    <br/>
                    Au moment de la délivrance de la licence, le club informera le licencié sur les montants d'indemnisation liés à l'assurance mais s’il ne les juge pas suffisants, le licencié pourra souscrire une assurance complémentaire auprès de l'assureur de son choix.
                    </Text>

                    <Text fontSize="lg" fontWeight="bold" mt={20}>La cotisation club</Text>
                    <Text px={10}>
                        La licence fédérale vous permet d’authentifier votre appartenance à la FFAM. Pour authentifier votre appartenance au club qui va vous la délivrer, vous devrez vous acquitter d’une cotisation annuelle club.
                        <br/>
                        <br/>
                        En fonction de votre âge et au-delà du droit d’entrée dans le club (en général inférieur à 100 €) et en fonction des infrastructures que le club va mettre à votre disposition, votre adhésion annuelle au club pourra varier, fonction de votre âge de 50 à moins de 150 €, licence fédérale incluse.
                    </Text>
                </Box>

                <iframe id="haWidget" scrolling="auto" src={lien}/>
            </Container>

        </Box>
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //Connect
    const jwt = await connect();
    let lien = await axios
      .get(process.env.SERVER_URL + "/liens/1", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((value) => {
        return value.data;
      })
      .catch((e) => {
        console.log("E", e);
      });
    return {
        props: {
            lien: lien.lien
        }
    }
}

export default AdhesionEnLigne;