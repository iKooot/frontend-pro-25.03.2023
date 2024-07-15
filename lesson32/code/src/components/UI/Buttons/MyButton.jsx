import { Button, styled } from "@mui/material";

const StyledButton = styled(Button, { name: 'MyButton' })(({ theme }) => {
    return {
        backgroundColor: theme.palette.mode !== 'light' ? '#333' : 'aqua'
    }
})

export function MyButton({children}) {
  return <StyledButton>{children}</StyledButton>;
}
