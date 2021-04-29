import { AspectRatio, Box, Link, Text } from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { Article } from "pages/blog";
import { Months } from "@components/blogArchives";

interface Props {
    article: Article;
}

const BlogPreview: React.FC<Props> = ({article}) => {

    let dateArticle = new Date(article.dateArticle);

    let dateToDisplay = (dateArticle.getDate() < 10 ? "0":"") + dateArticle.getDate() + " " + Months[dateArticle.getMonth()] + ' ' + dateArticle.getFullYear()

    return <Link href={"/article/" + article.id} _hover={{textDecoration: "none"}}>
        <Box border="1px solid rgba(255,255,255,.2)" 
                    h="100%" 
                    borderRadius="2xl" 
                    maxW="450px" 
                    cursor="pointer" 
                    className='scaleOnHover'
                    bg="main.200"
                    
                    >
            <AspectRatio maxW="100%" maxH="250px" ratio={16/9} className='aspectRatioContain'>
                <Image src={process.env.NEXT_PUBLIC_URL_SERVER + article.apercu.formats.large.url} 
                        alt={article.apercu.alternativeText}
                        objectFit="contain"
                        objectPosition="top"
                        borderRadius='15px 15px 15px 15px'
                        />
            </AspectRatio>
            <Box h="80px" px='8' py="2">
                <Text color="main.100" h="50px" fontSize="lg" fontWeight="bold" maxW="80%" overflow="hidden">{article.title}</Text>
                <Text color="main.100" h="20px" fontSize="md" w="150px" overflow="hidden" float='right' textAlign="right">{dateToDisplay}</Text>
            </Box>
        </Box>
    </Link>
}

export default BlogPreview;