import { ActionType } from '../action-types'
import { Action } from '../actions'

type RepositoriesState = {
  isLoading: boolean
  error: string | null
  data: string[]
}

export const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { isLoading: true, error: null, data: [] }
    case ActionType.SEARCH_REPO_SUCCESS:
      return { isLoading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPO_ERROR:
      return { isLoading: false, error: action.payload, data: [] }
    default:
      return state
  }
}
