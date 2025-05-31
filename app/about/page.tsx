import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "JavaScript", level: 2 },
  { name: "TypeScript", level: 2 },
  { name: "React", level: 2 },
  { name: "Next.js", level: 3 },
  { name: "Python", level: 5 },
  { name: "Java", level: 3 },
  { name: "Node.js", level: 1 },
  { name: "Git", level: 3 },
  { name: "Unity", level: 2 },
  { name: "HTTP", level: 3 },
  { name: "CSS", level: 2 },
  { name: "TailwindCSS", level: 3 },
]

const education = [
  {
    period: "2018年4月 - 2021年3月",
    institution: "三国丘高等学校",
    description: "文理学科卒業",
  },
  {
    period: "2021年4月 - 2025年3月",
    institution: "和歌山大学",
    description: "システム工学部 システム工学科",
  },
  {
    period: "2025年4月 - 2027年3月 - 予定",
    institution: "和歌山大学大学院",
    description: "システム工学研究科",
  },
]

const awards = [
  {
    year: "2024年",
    competition: "和歌山大学学生挑戦コンテスト2024",
    title: "優秀賞",
    description: "和歌山大学へのデジタルサイネージ導入の提案",
  },
  {
    year: "2025年",
    competition: "【技育CAMP2024】ハッカソン Vol.23",
    title: "最優秀賞",
    description: "チーム開発でのGoogle Chrome拡張機能制作",
  },
]

function StarRating({ level }: { level: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className={`h-4 w-4 ${star <= level ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          エンジニアを目指す学生として，日々技術を学び，成長を続けています．
        </p>
      </div>

      {/* プロフィール */}
      <Card>
        <CardHeader>
          <CardTitle>プロフィール</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-firework-purple to-firework-blue flex items-center justify-center overflow-hidden">
              <Image
                src="/images/heat.png"
                alt="プロフィール画像"
                width={128}
                height={128}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-2xl font-bold text-white">阿野 寛人</p>
            </div>
            <div>
              <p className="text-lg text-gray-300">2002年7月15日</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">自己紹介</h3>
              <p className="text-gray-300">自己紹介を書きます．</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 自己PR */}
      <Card>
        <CardHeader>
          <CardTitle>自己PR</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">自己紹介を書きます．</p>
        </CardContent>
      </Card>

      {/* キャリアビジョン */}
      <Card>
        <CardHeader>
          <CardTitle>キャリアビジョン</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-white">短期目標（1-2年）</h3>
            <p className="text-gray-300">キャリアビジョンを書きます．</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">中期目標（3-5年）</h3>
            <p className="text-gray-300">キャリアビジョンを書きます．</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">長期目標（5年以上）</h3>
            <p className="text-gray-300">キャリアビジョンを書きます．</p>
          </div>
        </CardContent>
      </Card>

      {/* 学歴 */}
      <Card>
        <CardHeader>
          <CardTitle>学歴</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white">{edu.period}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-300">{edu.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 受賞履歴 */}
      <Card>
        <CardHeader>
          <CardTitle>受賞履歴</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {awards.map((award, index) => (
            <div key={index} className="border-l-4 border-firework-gold pl-4">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary">{award.year}</Badge>
                <h3 className="font-semibold text-white">{award.competition}</h3>
              </div>
              <p className="font-medium text-firework-gold">{award.title}</p>
              <p className="text-sm text-gray-300">{award.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 技術スキル */}
      <Card>
        <CardHeader>
          <CardTitle>技術スキル</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-white">{skill.name}</span>
                <StarRating level={skill.level} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
