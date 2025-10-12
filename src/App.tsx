import { Button, Drawer, Header, Input, Select, Text, Title } from "@lib/components";
import { IconHamburguer, IconTulip } from "@lib/icons";
import { useState } from "react";

function App() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Text content="This is a sample text component using the Poppins font." />
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

      <div>
        <Input
          label="Senha"
          id="senha"
          ariaLabel="Senha"
          labelId={"senha"}
          handleOnChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
          value={password}
          maxTextLength={50}
          description=""
          placeholder="Digite a sua senha"
          type="password"
          protect={true}
        />
      </div> */}

      <Header.Root>
        <Header.Wrapper>
          <Header.Logo
            type="svg"
            svg={<IconTulip />}
            size="regular"
            alt="Tulip Ion"
          />
          <Title tag="h2" content="Início" />
          <Header.Action
            onClick={() => console.log("aciton")}
            icon={<IconHamburguer />}
            ariaLabel="Action"
            name="actio"
          />
        </Header.Wrapper>

        <button type="button" onClick={() => setOpen(true)}>Open Drawer</button>

        <Drawer
          isOpen={open}
          onClose={() => {
            console.log('drawer overlay') 
            setOpen(!open)
          }}
          position="left"
          width="full"
        >

          <button type="button" onClick={() => {
            console.log('drawer overlay') 
            setOpen(!open)
          }}>Close Drawer</button>
          <p>Drawer Content</p>

        </Drawer>

      </Header.Root>
    </>
  );
}

export default App;
