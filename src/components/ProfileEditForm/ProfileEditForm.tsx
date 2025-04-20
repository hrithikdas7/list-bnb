const ProfileEditForm = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <form onSubmit={() => {}}>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Type here"
                // value={formData.name}
                // onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type here"
                // value={formData.email}
                // onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Type here"
                // value={formData.username}
                // onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Photo<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Image url"
                // value={formData.photoUrl}
                // onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Type here"
                // value={formData.location}
                // onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Type here"
                // value={formData.contactNumber}
                // onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileEditForm;
