import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'
import { useLocation, useParams, Link } from 'wouter'
import Image from '../home/Image'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import ReactPlayer from 'react-player'

const Index = () => {
  const { lan } = useDataContext()
  const section = useLocation()[0].split('/')[1]
  const { slug } = useParams() as { slug: string }
  const { data, loading } = useFetch(`/post/${slug}`)
  const { data: posts, loading: loadingPosts } = useFetch(`/posts`)
  const [postSection, setPostSection] = useState([])

  let title_sec = ''
  let subtitle_sec = ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (section === 'articles') {
    if (lan === 'en') {
      title_sec = 'Articles'
      subtitle_sec = 'Article'
    } else {
      title_sec = 'Artículos'
      subtitle_sec = 'Artículo'
    }
  } else if (section === 'videos') {
    title_sec = 'Videos'
    subtitle_sec = 'Video'
  } else {
    if (lan === 'en') {
      title_sec = 'Posts'
      subtitle_sec = 'Post'
    } else {
      title_sec = 'Publicaciones'
      subtitle_sec = 'Publicación'
    }
  }
  useEffect(() => {
    if (!posts) return
    const filteredPosts = posts.filter(
      section === 'articles'
        ? item => item.type === 1
        : section === 'videos'
        ? item => item.type === 2
        : item => item.type === 3
    )
    setPostSection(filteredPosts)
  }, [posts, section])

  if (loading) return <Loader />
  if (!data) return null

  return (
    <Layout>
      <section className='max-w-5xl m-auto pt-30 flex flex-col gap-y-4 lg:gap-y-8 px-4'>
        <div className='flex flex-col gap-y-8'>
          <h1 className='text-primary font-medium text-3xl lg:text-5xl'>{title_sec}</h1>
          <div className='flex gap-2 items-center flex-wrap'>
            {loadingPosts ? (
              <Loader />
            ) : (
              postSection.map((item, index) => (
                <Link
                  href={`/${item.url}`}
                  key={index}
                  className={`border border-primary px-8 py-2 text-lg rounded-2xl font-medium hover:text-white hover:bg-primary transition-all ${
                    '/' + section + '/' + slug === item.url ? 'bg-primary text-white' : ''
                  }`}
                >
                  {lan === 'en' ? item.title_en : item.title_es}
                </Link>
              ))
            )}
          </div>
        </div>
        <div className='flex flex-col gap-y-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-y-4 pt-8'>
              <h2 className='text-primary font-medium text-3xl lg:text-5xl mb-2'>{subtitle_sec}</h2>
              <span className='font-semibold lg:text-3xl text-tertiary'>
                {lan === 'en' ? data.title_en : data.title_es}
              </span>
              {data.author && (
                <span className='text-lg italic'>
                  {lan === 'es' ? 'Por' : 'By'} {data.author}
                </span>
              )}
            </div>
            {section !== 'videos' && (
              <div>
                <div className='aspect-square lg:aspect-[7/5] overflow-hidden rounded-2xl'>
                  <Image
                    src={data.image}
                    alt={data.title}
                  />
                </div>
              </div>
            )}
          </div>

          {section === 'videos' && (
            <div className='aspect-video'>
              <ReactPlayer
                src={data.video}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          )}

          <div>
            <p className='lg:text-lg whitespace-break-spaces'>{lan === 'en' ? data.text_en : data.text_es}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
