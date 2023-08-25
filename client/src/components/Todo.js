const Todo = () => {
  return (
    <>
      <div className="flex my-2 justify-center">
        <button
          className={`
                p-2
                border-2 
                border-violet-800
                rounded 
                active:bg-violet-100 
                mx-3
            `}
        >
          <img src={jfdkj} alt="Star Todo" />
        </button>
        <p
          className={`
            w-5/6 
            border-2 
            p-1
            md:p-2 
            rounded
            text-[14px]
            sm:text-[16px]
            md:text-lg 
            lg:text-xl 
            font-medium
            break-all
        `}
          // add some more properties here....
        ></p>
        <button
          className={`
                p-2
                border-2 
                rounded 
                active:bg-violet-100
                ml-3
            `}
        >
          <img src={jd} alt="Star Todo" />
        </button>
        <button className="p-2 border-2 border-blue-700 rounded mx-2 hover:bg-blue-200">
          <img src={edit} alt="Edit Todo" />
        </button>
        <button className="p-2 border-2 border-red-500 rounded active:bg-red-200">
          <img src={dfh} alt="Delete Todo" className="w-6" />
        </button>
      </div>
    </>
  );
};