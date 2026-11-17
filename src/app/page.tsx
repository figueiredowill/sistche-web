import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backgroundColor: "#000000",
      }}
    >
      <Image
        src="/logo-sistche.png"
        alt="Sistchê"
        width={1084}
        height={307}
        priority
        style={{
          display: "block",
          width: "100%",
          maxWidth: "650px",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </main>
  );
}
