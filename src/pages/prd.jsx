import markdownToHtml from "../lib/markdownToHtml";
import { getPostByFilename } from "../lib/getMarkdown";
import { Box } from "@mui/material";

export default function Prd(props) {
  console.log(props);

  return (
    <Box
      container
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        className={"boop"}
        sx={{
          px: 30,
        }}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Box>
  );

  return <div>{props.content}</div>;
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
