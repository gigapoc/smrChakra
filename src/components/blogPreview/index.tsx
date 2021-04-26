import { Box } from "@chakra-ui/layout"
import { Article } from "pages/blog";



interface Props {
    article: Article;
}

const BlogPreview: React.FC<Props> = ({}) => {

    return <Box border="1px solid red" h="100%">

    </Box>
}

export default BlogPreview;