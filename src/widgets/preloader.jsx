export default function Preloader() {
    return (
        <div className="preloader w-[100vw] h-[100vh] fixed z-[5] bg-white">
            <div className="absolute top-[50%] left-[50%] flex flex-col gap-[12px]">
                <div className="w-[72px] h-[72px]">
                    <svg className="preloader-big_circle absolute" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 70.2C36 71.1941 35.1936 72.0047 34.2007 71.955C30.0879 71.7492 26.0362 70.839 22.2234 69.2597C17.8557 67.4505 13.8871 64.7988 10.5442 61.4558C7.20124 58.1129 4.5495 54.1443 2.74033 49.7766C0.931165 45.4089 -1.25866e-06 40.7276 0 36C1.25866e-06 31.2724 0.93117 26.5911 2.74034 22.2234C4.54951 17.8557 7.20125 13.8871 10.5442 10.5441C13.8871 7.20124 17.8557 4.5495 22.2234 2.74033C26.0362 1.16104 30.0879 0.2508 34.2007 0.0449889C35.1936 -0.00469507 36 0.805888 36 1.8V1.8C36 2.79411 35.1935 3.59479 34.2009 3.64999C30.5611 3.85241 26.977 4.66795 23.6011 6.0663C19.6701 7.69455 16.0984 10.0811 13.0898 13.0897C10.0811 16.0984 7.69456 19.6701 6.06631 23.601C4.43806 27.532 3.6 31.7452 3.6 36C3.6 40.2548 4.43805 44.468 6.0663 48.3989C7.69455 52.3299 10.0811 55.9016 13.0897 58.9103C16.0984 61.9189 19.6701 64.3054 23.6011 65.9337C26.977 67.332 30.561 68.1476 34.2009 68.35C35.1935 68.4052 36 69.2059 36 70.2V70.2Z" fill="#F97316"/>
                    </svg>

                    <svg className="preloader-small_circle absolute" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 18.45C36 17.373 36.8752 16.4899 37.9468 16.5974C39.8397 16.7873 41.6982 17.2536 43.4623 17.9843C45.8282 18.9643 47.9778 20.4007 49.7886 22.2114C51.5993 24.0222 53.0357 26.1718 54.0157 28.5377C54.9956 30.9035 55.5 33.4392 55.5 36C55.5 38.5608 54.9956 41.0965 54.0156 43.4623C53.0357 45.8282 51.5993 47.9778 49.7886 49.7886C47.9778 51.5993 45.8282 53.0357 43.4623 54.0157C41.6982 54.7464 39.8397 55.2127 37.9468 55.4026C36.8752 55.5101 36 54.627 36 53.55V53.55C36 52.473 36.8764 51.6126 37.9449 51.4783C39.3253 51.3048 40.6792 50.9471 41.9699 50.4125C43.8625 49.6285 45.5823 48.4795 47.0309 47.0309C48.4795 45.5823 49.6285 43.8625 50.4125 41.9699C51.1965 40.0772 51.6 38.0486 51.6 36C51.6 33.9514 51.1965 31.9228 50.4125 30.0301C49.6285 28.1375 48.4795 26.4177 47.0309 24.9691C45.5823 23.5205 43.8625 22.3715 41.9699 21.5875C40.6792 21.0529 39.3253 20.6952 37.9449 20.5217C36.8764 20.3874 36 19.527 36 18.45V18.45Z" fill="#F97316"/>
                    </svg>
                </div>

                <span className="text-[18px] font-medium text-[#8D8D8D]">Загрузка...</span>
            </div>
        </div>
    )
}