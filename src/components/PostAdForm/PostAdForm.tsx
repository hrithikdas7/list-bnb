import { Form, Input, TextArea } from "informed";
import { usePostAdForm, Values } from "./usePostAdForm";

const PostAdForm = () => {
  const { handleSubmit, loading, formRef } = usePostAdForm();

  return (
    <main className="flex-1 p-6">
      <Form
        onSubmit={({ values }) => handleSubmit(values as Values)}
        className="max-w-2xl"
        //@ts-expect-error - formRef is a ref to FormApi, which has a reset method
        ref={formRef}
      >
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ad Title<span className="text-pink-500">*</span>
          </label>
          <Input
            name="title"
            id="title"
            placeholder="Type here"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price<span className="text-pink-500">*</span>
          </label>
          <Input
            name="price"
            id="price"
            type="number"
            placeholder="Type here"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description<span className="text-pink-500">*</span>
          </label>
          <TextArea
            name="description"
            id="description"
            rows={5}
            placeholder="Type here"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Photos<span className="text-pink-500">*</span>
          </label>
          <Input
            name="image"
            id="image"
            placeholder="Image URL"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      </Form>
    </main>
  );
};

export default PostAdForm;
