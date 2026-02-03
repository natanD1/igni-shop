export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <h1 className="p-4 text-center font-semibold text-2xl text-amber-200 tracking-tight">Product Page {id}</h1>
}
