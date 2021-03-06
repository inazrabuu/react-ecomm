import { createSelector } from 'reselect'

const selectDirectory = (state) => {
  return state.directory
}

export const selectDirectorySelections = createSelector(
  [selectDirectory],
  (directory) => { return directory.sections }
)