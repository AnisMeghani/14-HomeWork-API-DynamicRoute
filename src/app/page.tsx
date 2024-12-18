import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "GET",
  });
  const res = await url.json();
  console.log(res);

  return (
    <main>
      <h1 className="font-bold text-5xl">API Page</h1>
      <br />

      {res.map((todo: any) => (
        <div key={todo.id}>
          <Link href={`${todo.id}`}>
            <h1>
              {todo.title} &nbsp; {todo.id}
            </h1>
          </Link>
        </div>
      ))}
    </main>
  );
}
