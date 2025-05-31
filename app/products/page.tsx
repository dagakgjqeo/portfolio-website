import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "タスク管理アプリ",
    description:
      "React + TypeScriptで作成したタスク管理アプリケーション。ドラッグ&ドロップでタスクの状態を変更できます。",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com/task-app",
    github: "https://github.com/username/task-app",
  },
  {
    id: 2,
    title: "レシピ検索サイト",
    description: "Next.jsとAPIを使用したレシピ検索サイト。材料から料理を検索できる機能を実装しました。",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com/recipe-app",
    github: "https://github.com/username/recipe-app",
  },
  {
    id: 3,
    title: "チャットアプリ",
    description: "Socket.ioを使用したリアルタイムチャットアプリケーション。複数のルームでの会話が可能です。",
    image: "/placeholder.svg?height=200&width=300",
    url: null,
    github: "https://github.com/username/chat-app",
  },
  {
    id: 4,
    title: "ポートフォリオサイト",
    description: "このサイト自体もNext.jsで作成した制作物の一つです。レスポンシブデザインを重視しました。",
    image: "/placeholder.svg?height=200&width=300",
    url: "https://example.com/portfolio",
    github: "https://github.com/username/portfolio",
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white">Products</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          これまでに制作したWebアプリケーションやサービスをご紹介する予定です．
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden bg-nightsky-medium border-nightsky-light">
            <div className="aspect-video relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-sm">{product.description}</p>
              <div className="flex gap-2">
                {product.url && (
                  <Button asChild size="sm">
                    <Link href={product.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Site
                    </Link>
                  </Button>
                )}
                {product.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={product.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
