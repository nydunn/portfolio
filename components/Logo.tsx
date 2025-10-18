import Image from "next/image";

export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <Image src="/logo-g.png" alt="Logo G" width={size} height={size} priority />
  );
}
