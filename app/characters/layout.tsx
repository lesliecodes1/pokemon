import "@fontsource/inter";

export const metadata = {
  title: "Characters",
  description: "Created by Leslie",
};

export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
