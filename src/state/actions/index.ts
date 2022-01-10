import { ActionType } from '../action-types/index'

type SearchRepositoriesAction = {
  type: ActionType.SEARCH_REPO
}
type SearchRepositoriesSuccessAction = {
  type: ActionType.SEARCH_REPO_SUCCESS
  payload: string[]
}
type SearchRepositoriesErrorAction = {
  type: ActionType.SEARCH_REPO_ERROR
  payload: string
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
