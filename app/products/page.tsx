import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "卒研：リアルタイム文字起こし+曖昧表現検出⁺質問文提示アプリ",
    description:
      "Google CloudのAPIを使用してリアルタイム文字起こしを実現し，話し手が使用した曖昧表現を検出，聞き手に質問文を提示するアプリです！",
    image: "/images/system_UI.png",
    url: null,
    github: null,
  },
  {
    id: 2,
    title: "PUMP-Pop Up Memo Pad-",
    description: "閲覧したサイトのメモを残すことで，要不要を一目で判断可能に！Chromeの拡張機能です！",
    image: "/images/icon3.png",
    url: "https://x.com/geek_pjt/status/1893956447618159054",
    github: "https://github.com/sato-teruhito/HoverMemo",
  },
  {
    id: 3,
    title: "Illust Battler",
    description: "かわいいいらすとやのキャラでバトルしよう！！初のゲーム制作！javaで作りました．",
    image: "/images/JavaExercises2.png",
    url: null,
    github: null,
  },
  {
    id: 4,
    title: "Time Quest",
    description: "未来，現在，過去を行き来して良い未来を目指す！行動次第でエンディングが変化します！",
    image: "/images/timequest.png",
    url: null,
    github: null,
  },
  {
    id: 5,
    title: "ブロック崩し発展版",
    description: "特殊ブロックの効果を纏って敵を速く倒すことが目標のゲームです！1週間でUnityのAssetを実装することを目標に作成しました！",
    image: "/images/game_clear.png",
    url: https://unityroom.com/games/iceexplodebrockbreaker,
    github: null,
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white">Products</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          これまでに制作したWebアプリケーションやサービスをご紹介するページです．随時Githubにアップロードします．
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
