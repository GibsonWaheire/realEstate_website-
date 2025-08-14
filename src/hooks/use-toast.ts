import * as React from "react"

export type ToastItem = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

type UseToastResult = {
  toasts: ToastItem[]
}

export function useToast(): UseToastResult {
  // Minimal stub: no runtime toast management, just a typed empty list
  const toasts = React.useMemo<ToastItem[]>(() => [], [])
  return { toasts }
}

export function toast(_item: Omit<ToastItem, "id"> & { id?: string }) {
  // Minimal no-op stub
  return { id: _item.id ?? String(Date.now()) }
}


