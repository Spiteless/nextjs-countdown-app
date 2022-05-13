import markdownToHtml from "../lib/markdownToHtml";
import { getPostByFilename } from "../lib/getMarkdown";
import { Box } from "@mui/material";

export default function Prd(props) {
  return (
    <Box
      container
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: 5,
      }}
    >
      <Box
        className={"boop"}
        sx={{
          maxWidth: "800px",
          mx: 2,
        }}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Box>
  );
}

export async function getStaticProps({ params }) {
  const markdown = getPostByFilename("prd");
  const content = await markdownToHtml(markdown.content || "fail");

  return {
    props: {
      content: content,
    },
  };
}
