// @ts-nocheck -- visual highlighting fixture, not an application

type InputProps = {
  label: string;
  disabled?: boolean;
};

function Input({ label, disabled = false }: InputProps) {
  return <input aria-label={label} disabled={disabled} placeholder="Filter items…" />;
}

const DropdownMenu = ({ children }: { children: unknown }) => (
  <div className="menu" data-state="open" role="menu">
    {children}
  </div>
);

const UI = {
  Button: ({ children }: { children: unknown }) => (
    <button className="primary" type="button">
      {children}
    </button>
  ),
};

export function Toolbar() {
  const visible = true;

  return (
    <>
      <section id="toolbar" aria-live="polite">
        <Input label="Email" disabled={!visible} />
        <DropdownMenu>
          <UI.Button>Columns</UI.Button>
        </DropdownMenu>
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2 5l6 6 6-6" />
        </svg>
      </section>
    </>
  );
}
