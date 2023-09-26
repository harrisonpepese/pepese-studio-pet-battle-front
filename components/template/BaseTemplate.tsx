import { Container, CssBaseline } from "@mui/material";
import AppHeader from "../organism/Header";
import { ChildrenProp } from "@/types/childrenProp";

export default function BaseTemplate({ children }: ChildrenProp) {
  return (
    <main>
      <CssBaseline>
        <AppHeader />
        <Container style={{ padding: "30px 20px" }}>{children}</Container>
      </CssBaseline>
    </main>
  );
}
