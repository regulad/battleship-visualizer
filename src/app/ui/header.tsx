export default function BoardHeader({ playerName }: { playerName: string }) {
  return (
    <p className={"text-center italic text-2xl font-black"}>
      {playerName}
    </p>
  );
}