import { Button, Text } from "@lib/components";

function App() {
  return (
    <>
      <Text content="This is a sample text component using the Poppins font." />
      <div
        className="button-group"
        style={{ display: "flex", gap: "10px", marginTop: "20px" }}
      >
        <Button
          ariaLabel="Sample Button"
          label="Variant Primary"
          icon={<span>🚀</span>}
          onClick={() => alert("Button clicked!")}
        />
        <Button
          ariaLabel="Sample Button"
          label="Variant Secondary"
          icon={<span>🚀</span>}
          onClick={() => alert("Button clicked!")}
          variant="secondary"
        />
        <Button
          ariaLabel="Sample Button"
          isDisabled={true}
          label="Disabled"
          icon={<span>🚀</span>}
          onClick={() => alert("Button clicked!")}
          variant="secondary"
        />
        <Button
          ariaLabel="Sample Button"
          isDisabled={true}
          isLoading={true}
          label="On Loading"
          icon={<span>🚀</span>}
          onClick={() => alert("Button clicked!")}
          variant="secondary"
        />
      </div>
    </>
  );
}

export default App;
