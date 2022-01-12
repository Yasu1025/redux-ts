import { FormEvent, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { RootState } from '../state/reducers/index'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const { data, isLoading, error } = useTypedSelector(
    state => state.repositories
  )

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
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}
      {!error && !isLoading && data.map(d => <p key={d}>{d}</p>)}
    </div>
  )
}
