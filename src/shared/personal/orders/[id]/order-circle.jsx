export default function OrderCircle({ count }) {
    const circles = [];

    for (let index = 0; index < 5; index++) {
        if (index < count) {
            circles.push(
                <div key={index} className="flex flex-row w-[20%] relative right-[5px] items-center justify-center">
                    <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#fb9d5c]"></div>

                    {index != 4 ? (
                        <div className="w-[80%] h-[5px] bg-[#fb9d5c]"></div>
                    ) : (
                        <div className="w-[80%] h-[5px] bg-[#ffffff00]"></div>
                    )}
                </div>
            );
        }
        else if (index == count) {
            circles.push(
                <div key={index} className="flex flex-row w-[20%] relative right-[5px] items-center justify-center">
                    <div className="w-[48px] h-[48px] scale-[1.2] relative rounded-[50%] bg-[#F97316]"></div>

                    {index != 4 ? (
                        <div className="w-[80%] h-[5px] bg-[#E6E9EC]"></div>
                    ) : (
                        <div className="w-[80%] h-[5px] bg-[#ffffff00]"></div>
                    )}
                </div>
            );
        } 
        else {
            circles.push(
                <div key={index} className="flex flex-row w-[20%] relative right-[5px] items-center justify-center">
                    <div className="w-[48px] h-[48px] relative rounded-[50%] bg-[#E6E9EC]"></div>
                    
                    {index != 4 ? (
                        <div className="w-[80%] h-[5px] bg-[#E6E9EC]"></div>
                    ) : (
                        <div className="w-[80%] h-[5px] bg-[#ffffff00]"></div>
                    )}
                </div>
            );
        }
    }

    return <>{circles}</>;
}