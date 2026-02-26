import { create } from 'zustand'

export const useDiceStore = create((set) => ({
  rolling: false,
  stopRoll: () => set(() => ({ rolling: false })),
  startRoll: () => set(() => ({ rolling: true })),
}))