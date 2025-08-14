import * as React from "react"

export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} LuxEstates. All rights reserved.
    </footer>
  )
}


