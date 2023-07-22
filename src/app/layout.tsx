import { GlobalStyles } from "@/global/styles";
import StyledComponentsRegistry from "@/lib/registry";
import { QueryClientProvider } from "@/services/queryClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
