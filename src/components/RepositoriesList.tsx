import { FormEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'

export const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
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
