import { Box, Container } from "@chakra-ui/layout"
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';


interface Props {
    
}

const Calendrier: React.FC<Props> = () => {

    return <Box bg="main.100" minH="calc(100vh - 100px)">
        <Container maxW="container.xl" mt={10} color='#fff'>
            <FullCalendar 
                plugins={[dayGridPlugin, googleCalendarPlugin]}
                initialView='dayGridMonth'
                height="80vh"
                firstDay={1}
                locale={frLocale}
                googleCalendarApiKey="AIzaSyB1n1D3Yi3nGrZyeokjOTRYaaAMknjOHc8"
                events={{
                    googleCalendarId: "senartmultirotorracing@gmail.com"
                }}
            />
        </Container>
    </Box>
}

export default Calendrier;