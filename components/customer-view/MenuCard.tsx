import menuData from "../../data/menuData.json";

export default function MenuCard() {
    return(
        <div className="p-4">
        {menuData.menus.map((menu) => (
            <div key={menu.name} className="mb-8 flex flex-col items-center justify-center">
                 <img
                    src={menu.image_url}
                    alt={menu.name}
                    className="w-full h-32 object-cover rounded-xl"
                />
                <h2 className="text-lg mt-4 text-gray-700 font-semibold mb-2">{menu.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{menu.description}</p>
                <div className="flex flex-col gap-y-3">
                    {menu.items.map((item) => (
                        <div key={item.title} className="bg-white flex px-3  py-3.5 shadow-xl rounded-lg overflow-hidden">
                       
                            <div className="">
                                <h3 className="text-medium font-semibold">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{item.short_description}</p>
                                <p className="text-red-600 font-bold">PKR {item.price}</p>
                            </div>
                            <img
                                src={item.image_url}
                                alt={item.title}
                                className="w-24 h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    )
}