import Canvas from "@/components/Canvas";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  return (
    <Canvas>
      <section>
        <div className="relative w-fit">
          <Image
            src={"/profile.png"}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="absolute right-0 bottom-0 bg-dark-background p-1.5 rounded-full">
            <Image
              src={"/indonesia.png"}
              alt="profile"
              width={10}
              height={10}
            />
          </span>
        </div>
        <div className="my-5">
          <h1 className="font-medium text-base text-white">Abyan Raditya</h1>
          <p className="text-xs text-neutral-500 font-medium">
            FrontEnd Web Developer
          </p>
        </div>
        <p>
          15 year old high school student from{" "}
          <span className="text-white font-medium underline">Indonesia</span>,
          passionate about web development and always eager to learn. Currently
          focusing to learn more about{" "}
          <span className="text-white font-medium">Web Development</span>.
        </p>
      </section>
      <hr className="my-16 border-t border-t-[#262626] border-dashed" />
      <section>
        <Title title="Gallery" description="A collection of photos i took." />
        <div className="mt-10">
          <div className="columns-2 gap-3 lg:gap-2 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-3 lg:[&>img:not(:first-child)]:mt-2">
            <Image
              src={"/photos/001.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/002.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/003.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/004.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/005.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/006.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/007.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/008.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
            <Image
              src={"/photos/009.jpeg"}
              alt="gallery"
              width={1000}
              height={100}
              className="rounded"
            />
          </div>
        </div>
      </section>
      <hr className="my-16 border-t border-t-[#262626] border-dashed" />
      <section>
        <Title
          title="Connect"
          description="Im not currently open for new opportunities, but feel free to contact me."
        />
        <div className="mt-10">
          <div className="grid sm:grid-cols-4 my-3">
            <span className="text-white">Instagram</span>
            <Link
              href="https://instagram.com/byanrkh"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              https://instagram.com/byanrkh
            </Link>
          </div>
          <div className="grid sm:grid-cols-4 sm:mt-0 my-3">
            <span className="text-white">Email</span>
            <Link
              href="mailto:abyan.raditya@icloud.com"
              className="underline underline-offset-2 hover:no-underline"
            >
              abyan.raditya@icloud.com
            </Link>
          </div>
        </div>
      </section>
      <hr className="my-16 border-t border-t-[#262626] border-dashed" />
    </Canvas>
  );
}
