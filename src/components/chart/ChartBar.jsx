import { styled } from "@mui/material";

export const ChartBar = ({ label, currentPrice, maxPrice }) => {
  const fillHeight = (100 * currentPrice) / maxPrice;
  return (
    <StyledChartBar>
      <StyledFiltredMonth>
        <StyledFill fillHeight={fillHeight}></StyledFill>
      </StyledFiltredMonth>
      <StyledText>{label}</StyledText>
    </StyledChartBar>
  );
};
const StyledChartBar = styled("div")(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));
const StyledFiltredMonth = styled("div")(() => ({
  width: "30px",
  height: "100%",
  borderRadius: "12px",
  border: "1px solid #363636",
  backgroundColor: "#A892EE",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  overflow: "hidden",
}));
const StyledFill = styled("div")(({ fillHeight }) => ({
  backgroundColor: "#4826B9",
  width: "100%",
  transition: "all 0.3s ease-out",
  height: fillHeight,
}));
const StyledText = styled("p")(() => ({
  fontSize: "0.6rem",
  fontWeight: "bold",
}));
