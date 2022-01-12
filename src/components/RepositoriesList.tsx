import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionsCreators } from '../state'

export const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(actionsCreators.searchRepositories(term))
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
