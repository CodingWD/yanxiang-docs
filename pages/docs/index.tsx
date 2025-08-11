import Head from 'next/head'
import Link from 'next/link'

export default function DocsIndex() {
  return (
    <>
      <Head>
        <title>文档中心 - YangXiang Docs</title>
        <meta name="description" content="YangXiang 文档中心" />
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

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              文档中心
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              欢迎来到 YangXiang 文档中心
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  快速开始
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  了解如何快速开始使用我们的产品和服务
                </p>
                <div className="mt-4">
                  <Link href="/docs/getting-started" className="text-blue-600 hover:text-blue-500">
                    查看详情 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  API 文档
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  详细的 API 接口文档和使用示例
                </p>
                <div className="mt-4">
                  <Link href="/docs/api" className="text-blue-600 hover:text-blue-500">
                    查看详情 →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  常见问题
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  常见问题解答和故障排除指南
                </p>
                <div className="mt-4">
                  <Link href="/docs/faq" className="text-blue-600 hover:text-blue-500">
                    查看详情 →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}