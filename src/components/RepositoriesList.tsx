import { ChangeEvent, FormEvent, useState } from 'react'

export const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  )
}
