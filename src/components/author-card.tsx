import { Card, CardContent } from './ui/card'

export function AuthorCard({ author, date }: { author: string; date: string }) {
  return (
    <Card className="my-8">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{author}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              EverWhen Team
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
              Published on {new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
