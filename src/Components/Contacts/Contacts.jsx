export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question? Send us a message.
      </p>

      <form className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Send Message
        </button>
      </form>
      <div className="mt-10 border-t pt-6">
        <p className="font-bold" >📧 Email: bahaamoustafa40@Gmail.com</p>
        <p className='font-bold'>📞 <span className="text-red-800 font-bold"> Phone:  </span> +20 1153159160</p>
        <p className="text-red-800 font-bold" >📍 15 May City ,Cairo, Egypt</p>
      </div>
    </div>
  );
}


