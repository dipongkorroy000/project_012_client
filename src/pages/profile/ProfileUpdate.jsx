import {useState} from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {useNavigate} from "react-router";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import PageSpinner from "../../components/Spinner/PageSpinner";
import {toast} from "react-toastify";
import {IoIosArrowBack} from "react-icons/io";

const ProfileUpdate = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {user, loading, updateUserProfile, setReload, reload} = useAuth();

  const {data} = useQuery({
    queryKey: ["user", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/userFind?email=${user.email}`);
      return res.data;
    },
    enabled: !!user.email,
  });

  if (loading) return <PageSpinner></PageSpinner>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const role = e.target.role.value;

    try {
      const updateDoc = {displayName: name, photoURL: image};

      updateUserProfile(updateDoc).then(async () => {
        navigate("/profile");

        await axiosSecure
          .patch("/userUpdate", {
            email: user.email,
            role: role,
            image: image,
          })
          .then((res) => {
            if (res.status === 201) {
              setReload(!reload);
              toast("Updated Your Account");
            }
          });
      });

      // Optionally show a toast or reload data
    } catch (err) {
      console.error("Profile update failed:", err);
    }
  };

  const imageHandle = async (e) => {
    const image = e.target.files[0];

    const imageUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(imageUrl, formData);
      const uploadedImageUrl = response.data.data.url;
      setImage(uploadedImageUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  function capitalizeWords(name) {
    return (
      name
        ?.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || ""
    );
  }

  const userName = capitalizeWords(user?.displayName);

  return (
    <div className="max-w-md max-md:w-sm max-md:p-10 mx-auto mt-10 my-20 py-20">
      <div className="flex flex-col">
        <IoIosArrowBack onClick={() => navigate(-1)} size={20} className="cursor-pointer" />

        <h2 className="text-2xl text-center font-bold max-md:text-lg">Update Profile</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={userName}
            className="mt-1 block w-full border rounded-md max-md:px-2 max-md:py-1 px-3 py-2 focus:outline-none focus:ring"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Profile Picture URL</label>
          <input
            onChange={imageHandle}
            type="file"
            name="photo"
            className="mt-1 block w-full border rounded-md max-md:px-2 max-md:py-1 px-3 py-2 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            name="role"
            defaultValue={data?.role}
            className="mt-1 block w-full border rounded-md max-md:px-2 max-md:py-1 px-3 py-2 focus:outline-none focus:ring"
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="worker">Worker</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>

        <button type="submit" className="w-full max-md:py-1 text-sm py-2 rounded-md  cursor-pointer">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
