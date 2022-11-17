import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HorizontalGallery from '../components/HorizontalGallery';
export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className=" w-screen h-screen bg-black flex items-center justify-center  text-purple-500 font-bungee text-7xl">
        <p className="animate-bounce">Scroll down</p>
      </div>
      <HorizontalGallery />
      <div className="w-screen h-screen bg-black flex items-center justify-center text-purple-500 font-bungee text-7xl">
        <p className="animate-bounce">The end</p>
      </div>{' '}
    </div>
  );
}
