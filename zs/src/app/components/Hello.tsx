type HelloProps = {
  name?: string; // question mark = optional
};

export default function Hello({ name = "Guest" }: HelloProps) {
  return <h2>Hello, {name}!</h2>;
}
