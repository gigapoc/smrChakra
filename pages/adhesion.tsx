import { Box, Container, Center, Text, Spacer } from "@chakra-ui/layout";
import { Title } from "@components/title";

interface Props {

}

const AdhesionEnLigne: React.FC<Props> = ({}) => {

    return <Box bg="main.100" minH="calc(100vh - 100px)" color="main.200" id="adhesionPage">
        <Container maxW="container.xl" py={10}>
            <iframe id="haWidget" scrolling="auto" src="https://www.helloasso.com/associations/senart-multirotor-racing/adhesions/adhesion-en-ligne-1/widget"/>

            <Box mt={20}>
                <Center m={10}>
                    <Title fontSize="lg" w="20%">Adhésion en ligne</Title>
                </Center>
                <Text fontSize="lg" fontWeight="bold">Validité de la licence</Text>
                <Text px={10}>
                    La licence est annuelle et elle est délivrée pour l'année civile. Toutefois, les licences peuvent commencer à être délivrées par les clubs à partir de mi septembre de l'année précédente.
                    <br/>
                    <br/>
                    Ainsi, pour les nouveaux adhérents, les licences souscrites à partir de septembre sont valables dès leur souscription et ce jusqu’ au 31 décembre de l’année suivante. Pour les adhérents déjà licenciés, la licence peut être également souscrite dès septembre mais elle ne prend effet que le 1er janvier de l'année suivante.
                </Text>
                
                <Text fontSize="lg" fontWeight="bold" mt={20}>Le certificat médical</Text>
                <Text px={10}>
                    La première délivrance d’une licence sportive est subordonnée (Article L 231-2 du code du sport), à la production d’un certificat médical attestant l’absence de contre-indication à la pratique des activités physiques et sportives liées à l‘aéromodélisme. Le médecin de famille est parfaitement habilité à délivrer ce certificat médical que les nouveaux licenciés de la FFAM doivent fournir au moment de leur demande d'adhésion au club. Si cette exigence s'applique à la première délivrance d’une licence "pratiquant loisir ou compétition" elle ne s'applique pas aux licences "encadrement".
                </Text>

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
        </Container>

    </Box>
}

export default AdhesionEnLigne;