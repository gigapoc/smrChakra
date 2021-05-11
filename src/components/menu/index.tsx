import { Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { Box, Button, Center, Popover, PopoverArrow, Td, Tr, PopoverContent, PopoverHeader, PopoverTrigger, Table, Tbody, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface MenuLinkProps {
    children: any;
    href: string;
    bold?: boolean
}
const MenuLink = ({children, href, bold}: MenuLinkProps) => {
    return <Link 
        href={href} 
        border='none'
        _hover={{
            textDecoration: 'none',
            color: useColorModeValue('orange.100', 'white'),
        }}
        fontWeight={bold?'600':'400'}>
          {children}
    </Link>;
}

interface PopoverMenuProps {
    menuName: string;
    links: {
        href: string;
        label: string;
    }[];
}
const PopoverMenu = ({menuName, links}: PopoverMenuProps) => {

    return <Box>
        <Popover trigger={'hover'} placement={'bottom'} >
            <PopoverTrigger>
                <Box>
                    <Text color='main.200' fontWeight="600" cursor="pointer" _hover={{
            textDecoration: 'none',
            color: useColorModeValue('orange.100', 'white'),
        }}>{menuName}</Text>
                </Box>
            </PopoverTrigger>
            <PopoverContent bg="main.200"
                    border={"1px solid white"}
                    rounded={'xl'}
                    color="main.100">
                    {/* <PopoverArrow/> */}
                    <Table variant="unstyled">
                        <Tbody rounded="xl">
                            {links.map((l,i) => 
                                <Tr cursor="pointer" _hover={{color:"orange.100"}} transition=".5s" key={i} >
                                    <Td rounded="xl" onClick={() => window.location.href=l.href} key={i+"_"+i}>
                                        <Center>{l.label}</Center>
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
            </PopoverContent>
        </Popover>
    </Box>
}

interface MenuProps {
    pagesActivites: {
        titre_menu: string;
        url: string;
        contenu: string;
        order: number;
    }[];
}

export const Menu: React.FC<any> = ({pagesActivites}: MenuProps) => {

    const linksActi = [];

    pagesActivites.sort((a, b) => {if (a.order > b.order) return 1; return -1;})
    for (let acti of pagesActivites) {
        linksActi.push({
            href: "/page/" + acti.url,
            label: acti.titre_menu
        })
    }

    const linksClub = [
        
        {
            href: "/adhesion",
            label: "Adhésion en ligne"
        },
        {
            href: "/terrains",
            label: "Accès aux terrains"
        },
        {
            href: '/chronologie',
            label: "Chronologie du club"
        },
        {
            href: "/calendrier",
            label: "Calendrier"
        },
        {
            href: "/contact",
            label: "Nous contacter"
        },
        {
            href: "/partenaires",
            label: "Nos partenaires"
        },
    ]

    return <Center color="main.200" h="100%">
        <Stack direction="row" spacing={20}>

            <PopoverMenu menuName="ACTIVITÉS" links={linksActi}/>
            <PopoverMenu menuName= "CLUB" links={linksClub}/>
            <MenuLink href={'/blog'} bold={true}>BLOG</MenuLink>

        </Stack>
    </Center>


}