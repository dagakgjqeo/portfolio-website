import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          お仕事のご依頼や就職のご連絡，ご質問がございましたら，お気軽にお声がけください．
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              メールアドレス
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-white">
              <a href="mailto:your-email@example.com" className="text-firework-gold hover:underline">
                s266008@wakayama-u.ac.jp
              </a>
            </p>
            <p className="text-sm text-gray-300 mt-2">
              就活のご連絡，その他お問い合わせはこちらまでお送りください．
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              オフィスアワー
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold text-white">24時間365日</p>
            <p className="text-sm text-gray-300 mt-2">
              学生のため，基本的にいつでも対応可能です． ただし，授業や試験期間中は返信が遅れる場合がございます．
              通常は24時間以内にご返信いたします．24h365dって書くと面白いかなと思って書きました．
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>お問い合わせについて</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-white">対応可能な内容</h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                <li>和歌山大学についてのお話</li>
                <li>Apex，hoyoverse，ハイキュー，ブルーロックなどについてのお話</li>
                <li>不明な情報についての質問</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">返信について</h3>
              <p className="text-sm text-gray-300">
                メールでのお問い合わせには、原則として24時間以内にご返信いたします。
                お急ぎの場合は、件名に【急用】とご記載ください。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
