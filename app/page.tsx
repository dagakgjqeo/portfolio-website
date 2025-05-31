import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Rocket, Star, Award, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative">
      {/* ヒーローセクション */}
      <div className="container py-24 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-firework-glow opacity-20 rounded-full blur-3xl z-0"></div>
        <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-firework-gold animate-sparkle" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              <span className="bg-gradient-to-r from-firework-gold via-firework-red to-firework-blue bg-clip-text text-transparent">
                In the Heat
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-300 sm:text-xl">
              技術への情熱と学習への意欲を持って、日々成長を続けています。私の学習過程と制作物をご覧ください。
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-to-r from-firework-purple to-firework-blue">
              <Link href="/about">About Me</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          <span className="bg-gradient-to-r from-firework-gold to-firework-red bg-clip-text text-transparent">
            ポリシー
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-nightsky-medium border-nightsky-light card-glow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-firework-red/20 flex items-center justify-center">
                <Code className="h-6 w-6 text-firework-red" />
              </div>
              <h3 className="text-xl font-bold text-white">技術力</h3>
              <p className="text-gray-300">
                開発団体に所属し，幅広く新しい言語の習得を目指して開発に取り組んでいます．現在の目標は規模の大きなプロダクトの作成です．
              </p>
            </CardContent>
          </Card>

          <Card className="bg-nightsky-medium border-nightsky-light card-glow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-firework-blue/20 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-firework-blue" />
              </div>
              <h3 className="text-xl font-bold text-white">スピード感</h3>
              <p className="text-gray-300">
                AIの発展により効率的にコードを書くことが可能になったため，ユーザの視点・体験を意識した設計に重点を置き，即座に完成させるスタイルで開発しています．
              </p>
            </CardContent>
          </Card>

          <Card className="bg-nightsky-medium border-nightsky-light card-glow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-full bg-firework-gold/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-firework-gold" />
              </div>
              <h3 className="text-xl font-bold text-white">学習意欲</h3>
              <p className="text-gray-300">
                既知の技術にとらわれず，新しい技術に対する好奇心と，継続的な学習への意欲を持ち続けています．
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
{/*
      {/* 最新の制作物 */}
      <div className="container py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-firework-blue to-firework-purple bg-clip-text text-transparent">
              最新の制作物
            </span>
          </h2>
          <Button variant="ghost" asChild>
            <Link href="/products">
              すべて見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "タスク管理アプリ",
              image: "/placeholder.svg?height=200&width=300",
              tech: ["React", "TypeScript", "Tailwind CSS"],
            },
            {
              title: "レシピ検索サイト",
              image: "/placeholder.svg?height=200&width=300",
              tech: ["Next.js", "API連携", "レスポンシブデザイン"],
            },
            {
              title: "チャットアプリ",
              image: "/placeholder.svg?height=200&width=300",
              tech: ["Socket.io", "Node.js", "Express"],
            },
          ].map((project, index) => (
            <Card key={index} className="overflow-hidden bg-nightsky-medium border-nightsky-light card-glow">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-nightsky-light text-firework-gold">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
*/}
      {/* 受賞歴ハイライト */}
      <div className="container py-16">
        <h2 className="text-2xl font-bold mb-8 text-white">
          <span className="bg-gradient-to-r from-firework-red to-firework-gold bg-clip-text text-transparent">
            受賞歴ハイライト
          </span>
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-firework-gold via-firework-red to-firework-blue"></div>

          <div className="space-y-8 relative">
            {[
              {
                year: "2025年",
                award: "【技育CAMP2024】ハッカソン Vol.23　最優秀賞",
                description: "チーム開発でのGoogle Chrome拡張機能制作",
              },
              {
                year: "2024年",
                award: "和歌山大学学生挑戦コンテスト2024　優秀賞",
                description: "和歌山大学へのデジタルサイネージ導入の提案",
              },
            ].map((item, index) => (
              <div key={index} className="ml-8 relative">
                <div className="absolute -left-10 top-1.5 w-6 h-6 rounded-full bg-nightsky-dark border-2 border-firework-gold flex items-center justify-center">
                  <Award className="h-3 w-3 text-firework-gold" />
                </div>
                <div className="bg-nightsky-medium p-4 rounded-lg border border-nightsky-light">
                  <div className="text-sm text-firework-gold">{item.year}</div>
                  <h3 className="font-bold text-white">{item.award}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAセクション */}
      <div className="container py-16">
        <div className="bg-gradient-to-r from-nightsky-medium to-nightsky-light p-8 rounded-lg border border-nightsky-light relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-firework-glow opacity-20 z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">お問い合わせ</h2>
              <p className="text-gray-300 max-w-md">
                お仕事のご依頼やご質問がございましたら、お気軽にお問い合わせください。
              </p>
            </div>
            <Button asChild size="lg" className="bg-gradient-to-r from-firework-gold to-firework-red">
              <Link href="/contact">
                お問い合わせ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
