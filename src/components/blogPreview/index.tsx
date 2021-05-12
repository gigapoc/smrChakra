import { AspectRatio, Box, Link, Text, Flex} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/image"
import { Article } from "pages/blog";
import { Months } from "@components/blogArchives";
import {FaRegEye} from "react-icons/fa"

interface Props {
    article: Article;
}

const BlogPreview: React.FC<Props> = ({article}) => {

    let dateArticle = new Date(article.dateArticle);

    let dateToDisplay = (dateArticle.getDate() < 10 ? "0":"") + dateArticle.getDate() + " " + Months[dateArticle.getMonth()] + ' ' + dateArticle.getFullYear()
    // console.log('ARTICLE', article.apercu)
    return <Link href={"/article/" + article.id} _hover={{textDecoration: "none"}}>
        <Flex border="1px solid rgba(255,255,255,.2)" 
                    h="100%" 
                    borderRadius="2xl" 
                    maxW="450px" 
                    cursor="pointer" 
                    className='scaleOnHover'
                    bg="main.200"
                    flexDir="column"
                    >
            <AspectRatio maxW="100%" maxH="250px" ratio={16/9} className='aspectRatioContain' flexGrow={5}>
                <Image src={process.env.NEXT_PUBLIC_URL_SERVER + article.apercu.url} 
                        alt={article.apercu.alternativeText}
                        objectFit="contain"
                        objectPosition="top"
                        borderRadius='15px 15px 15px 15px'
                        />
            </AspectRatio>
            <Flex px='8' py="2" flexGrow={4} flexDir="column" flexBasis={"80px"}>
                <Box color="main.100" h="50px" fontSize="lg" fontWeight="bold" maxW="80%" overflow="hidden" flexGrow={5}>{article.title}</Box>
                <Box flexGrow={1}>
                    <Box color="main.100" mt="2px" className="blogViews"><FaRegEye/> {article.views}</Box>
                    <Box color="main.100" h="20px" fontSize="md" w="150px" overflow="hidden" float='right' textAlign="right" opacity={.8}>{dateToDisplay}</Box>
                </Box>
            </Flex>
        </Flex>
    </Link>
}

export default BlogPreview;