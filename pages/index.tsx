import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>YangXiang Docs</title>
        <meta name="description" content="YangXiang documentation site" />
        <link rel="icon" href="/favicon.ico" />
        {/* Tailwind CDN */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css'
          integrity='sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* 导航栏 */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  YangXiang Docs
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/docs" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  文档中心
                </Link>
                <Link href="/admin" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  管理后台
                </Link>
                <Link href="/demo/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  博客演示
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* 主要内容 */}
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              欢迎来到 
              <span className="text-blue-600">YangXiang Docs</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              这是一个基于 TinaCMS 和 Next.js 构建的文档网站，提供完整的内容管理和展示功能。
            </p>
          </div>

          {/* 功能卡片 */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">📚</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        文档中心
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    浏览完整的产品文档、API 参考和使用指南。
                  </p>
                  <div className="mt-6">
                    <Link 
                      href="/docs" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      进入文档
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">⚙️</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        管理后台
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    管理网站内容、用户权限和系统配置。
                  </p>
                  <div className="mt-6">
                    <Link 
                      href="/admin" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                    >
                      进入管理
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">✍️</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        博客演示
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">
                    查看 TinaCMS 动态内容管理的演示示例。
                  </p>
                  <div className="mt-6">
                    <Link 
                      href="/demo/blog" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
                    >
                      查看演示
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 底部信息 */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                技术栈
              </h2>
              <div className="flex justify-center space-x-8 text-gray-600">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <div>Next.js</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <div>TinaCMS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💨</div>
                  <div>Tailwind CSS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <div>TypeScript</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}