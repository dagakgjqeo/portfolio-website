import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    id: 1,
    title: "所属団体「add.」について",
    description: "現在所属している開発団体のHPです．現在鋭意制作中ですm(_ _)m",
    image: "/images/add-logo.png",
    url: "https://addmaru.tech/",
    publishedAt: "2025年5月31日",
  },
]

export default function ArticlesPage() {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white">Articles</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          技術学習の過程で得た知識や経験を記事として公開する予定です．
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="overflow-hidden hover:shadow-lg transition-shadow bg-nightsky-medium border-nightsky-light"
          >
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 sm:flex-shrink-0">
                    <div className="aspect-video sm:aspect-[4/3] relative">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold hover:text-firework-gold transition-colors text-white">
                          {article.title}
                        </h3>
                        <span className="text-sm text-gray-300 whitespace-nowrap ml-4">{article.publishedAt}</span>
                      </div>
                      <p className="text-gray-300">{article.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
