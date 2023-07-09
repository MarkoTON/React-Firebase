export default function Title({ title, subtitle , children}) {
  console.log(children);
  return (
    <>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
      <hr />
      {children}
      <hr />
    </>
  )
}
