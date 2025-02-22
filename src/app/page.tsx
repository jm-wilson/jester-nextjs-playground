import Image from 'next/image';

export default function Home() {
  return (
    <div className="ml-40">
      <div className="flex items-baseline">
        <Image src="/jester.png" alt="JESTER store logo" width={150} height={150} />
        <h1 className="text-7xl lg:text-8xl">
          <span className="font-bold">J</span>oe&apos;s&nbsp;
          <span className="font-bold">E</span>verything&nbsp;
          <span className="font-bold">S</span>tore
        </h1>
      </div>
      <h2 className="ml-40 italic text-4xl">
        <span className="font-bold">T</span>rusted.&nbsp;
        <span className="font-bold">E</span>xperienced.&nbsp;
        <span className="font-bold">R</span>eliable.
      </h2>
    </div>
  );
}
