import { ITopTagData } from 'types/artwork'
import { atom } from 'recoil'

export const topTagDataState = atom<ITopTagData[]>({
  key: 'topTagData',
  default: [],
})
