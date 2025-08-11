import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function AdminIndex() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 简单的演示登录逻辑
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
    } else {
      alert('用户名或密码错误')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <Head>
        <title>管理后台 - YangXiang Docs</title>
        <meta name="description" content="YangXiang 管理后台" />
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

      <div className="min-h-screen bg-gray-100">
        {!isLoggedIn ? (
          // 登录页面
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  管理后台登录
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  请输入您的管理员凭据
                </p>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <input
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="用户名"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="密码"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    登录
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    演示账号: admin / admin
                  </p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          // 管理后台主页面
          <div>
            {/* 导航栏 */}
            <nav className="bg-white shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <h1 className="text-xl font-semibold text-gray-900">
                      YangXiang 管理后台
                    </h1>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">欢迎, {username}</span>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      退出登录
                    </button>
                  </div>
                </div>
              </div>
            </nav>

            {/* 主要内容 */}
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold">📄</span>
                          </div>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              内容管理
                            </dt>
                            <dd className="text-lg font-medium text-gray-900">
                              管理文档和页面内容
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold">👥</span>
                          </div>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              用户管理
                            </dt>
                            <dd className="text-lg font-medium text-gray-900">
                              管理用户账户和权限
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold">⚙️</span>
                          </div>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              系统设置
                            </dt>
                            <dd className="text-lg font-medium text-gray-900">
                              配置系统参数和选项
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link 
                    href="/" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    返回首页
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}