export default function ErrorLayout() {
  return (
    <main className='flex flex-col gap-2'>
      <header>
        <h1 className='font-bold text-2xl'>Oops!</h1>
      </header>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </main>
  )
}
