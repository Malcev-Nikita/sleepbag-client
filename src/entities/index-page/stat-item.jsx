export default function StatItem({ stat, index }) {
    return (
        <div className='flex flex-col' key={index} role="group" itemscope itemtype="http://schema.org/Rating">
            <p className='font-bold text-[40px] text-[#F97316] font-[unbounded]'><span className='text-[#F97316]' itemprop="ratingValue">{stat.attributes.Count}</span>{stat.attributes.Postfix_Name}</p>
            <p className='font-normal text-[16px] tracking-[1px] font-[Manrope]' itemprop="description">{stat.attributes.Name}</p>
        </div>
    )
}