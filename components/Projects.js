import Image from "next/image";
import Link from "next/link";
import React, { forwardRef } from "react";

const Projects = ({ text }, ref) => {
  return (
    <div
      className="px-auto pt-16 pb-24 bg-gradient-to-r from-slate-300 to-white"
      ref={ref}
    >
      <div className="pb-10">
        <h1 className="text-4xl text-center">{text}</h1>
      </div>
      <div className="flex justify-center items-center text-center flex-wrap gap-6">
        <div className="max-w-sm rounded shadow-2xl cursor-pointer">
          <div>
            <Image
              className="w-full transition hover:scale-75"
              src="/organic-store.png"
              width={300}
              height={300}
              alt="organic-store"
            />
          </div>
          <div className="pt-2 flex p-5 justify-between">
            <h3 className="font-bold text-xl mt-3">Organic store</h3>
            <Link href="https://github.com/nafeed013/Organic-store">
              <button className="border-black border px-2 py-2 mt-1 rounded-md bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
                Source code
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer">
          <div>
            <Image
              className="w-full transition hover:scale-75"
              src="/bitlinks.png"
              width={300}
              height={300}
              alt="bitlinks"
            />
          </div>
          <div className="pt-2 flex p-5 justify-between">
            <h3 className="font-bold text-xl mt-3">BitLinks</h3>
            <Link href="https://github.com/nafeed013/url-shortner">
              <button className="border-black border px-2 py-2 mt-1 rounded-md bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
                Source code
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer">
          <div>
            <Image
              className="w-full transition hover:scale-75"
              src="/amazon.png"
              width={300}
              height={300}
              alt="amazon"
            />
          </div>
          <div className="pt-2 flex p-5 justify-between">
            <h3 className="font-bold text-xl mt-3">Amazon</h3>
            <Link href="https://github.com/nafeed013/amazon-clone">
              <button className="border-black border px-2 py-2 mt-1 rounded-md bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
                Source code
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer">
          <div>
            <Image
              className="w-full transition hover:scale-75"
              src="/nothing.png"
              width={300}
              height={300}
              alt="nothing"
            />
          </div>
          <div className="pt-2 flex p-5 justify-between">
            <h3 className="font-bold text-xl mt-3">Nothing</h3>
            <Link href="https://github.com/nafeed013/nothing-website">
              <button className="border-black border px-2 py-2 mt-1 rounded-md bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
                Source code
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer">
          <div>
            <Image
              className="w-full transition hover:scale-75"
              src="/myntra.png"
              width={300}
              height={300}
              alt="myntra"
            />
          </div>
          <div className="pt-2 flex p-5 justify-between">
            <h3 className="font-bold text-xl mt-3">Myntra</h3>
            <Link href="https://github.com/nafeed013/myntra-clone">
              <button className="border-black border px-2 py-2 mt-1 rounded-md bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
                Source code
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl cursor-pointer">
          <div>
            <Image
              className="w-full transition hover:scale-75"
              src="/youtube.png"
              width={300}
              height={300}
              alt="youtube"
            />
          </div>
          <div className="pt-2 flex p-5 justify-between">
            <h3 className="font-bold text-xl mt-3">YouTube</h3>
            <Link href="https://github.com/nafeed013/youtube-clone">
              <button className="border-black border px-2 py-2 mt-1 rounded-md bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
                Source code
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Projects);
