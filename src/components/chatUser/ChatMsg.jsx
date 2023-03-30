import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useChat } from "../contexts/ChatContextProvider";

const ChatMsg = ({ item }) => {
  const {} = useChat();
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));
  const { messages } = useChat();
  return (
    <div>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
          marginTop: "30%",
          marginLeft: "50%",
          borderRadius: 35,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth>
            {/* <Box>
              {messages?.map((item) => (
                <Typography key={item.id} item={item} />
              ))}
            </Box> */}
            <Typography noWrap>{item.message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>

      {/* <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
          marginLeft: 10,
          borderRadius: 35,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs>
            <Typography noWrap>dssdvsdvsv</Typography>
          </Grid>
        </Grid>
      </StyledPaper> */}
    </div>
  );
};

export default ChatMsg;