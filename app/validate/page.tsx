export default function Page() {
  // TODO: Implement validator here
  return (
    <main className="flex flex-col items-center">
      <textarea
        name="content"
        id="paste-content"
        placeholder={"Paste your llms.txt content"}
        className="border border-neutral-300 w-1/2 h-50 mt-10"
      />

      <button
        type="button"
        className="p-2 border border-neutral-200 mt-2 cursor-pointer"
      >
        Validate
      </button>
    </main>
  );
}
