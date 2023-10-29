import { Container, CssBaseline } from "@mui/material";
import AppHeader from "../organism/Header";
import { ChildrenProp } from "@/types/childrenProp";
import { AuthContext, AuthContextProvider } from "@/context/authContext";
import { usePathname } from "next/navigation";

export default function BaseTemplate({ children }: ChildrenProp) {
  const pageWithOutHeader = ["login", "singup"];
  const path = usePathname();
  const canRenderHeader = !pageWithOutHeader.some((x) => path.includes(x));
  return (
    <main>
      <AuthContextProvider>
        <CssBaseline>
          {canRenderHeader && <AppHeader />}
          <Container style={{ padding: "30px 20px", height: "100vh" }}>
            {children}
          </Container>
        </CssBaseline>
      </AuthContextProvider>
    </main>
  );
}
