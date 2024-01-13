'use client'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  router.push('/shop')

  return (
    <main className="flex justify-between p-24">
    </main>
  )
}
