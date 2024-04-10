export function TextInput(value: string, onChange: (value: string) => void) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function PasswordInput(value: string, onChange: (value: string) => void) {
  return (
    <input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function TextInputAlphabet(value: string, onChange: (value: string) => void) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-zA-Z0-9]/g, '');
    onChange(filteredValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}
