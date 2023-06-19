import "@fontsource/inter";

export const metadata = {
  title: "Characters",
  description: "Explore your character",
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
