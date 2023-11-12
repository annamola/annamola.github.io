import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const useBreakpoints = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:400px)");
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));
    return { isMobile, isSm };
};

export default useBreakpoints;
