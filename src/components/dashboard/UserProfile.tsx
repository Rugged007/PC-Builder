import { useAuth } from "../../../supabase/auth";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function UserProfile() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-semibold text-gray-700">
          Please sign in to view your profile
        </h2>
      </div>
    );
  }

  const userInitial = (user.user_metadata?.full_name || user.email || "")
    .charAt(0)
    .toUpperCase();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex flex-col items-center">
            <Avatar className="h-32 w-32 border-2 border-blue-100">
              {user.user_metadata?.avatar_url ? (
                <AvatarImage
                  src={user.user_metadata.avatar_url}
                  alt="Profile picture"
                />
              ) : (
                <AvatarFallback className="bg-blue-100 text-blue-700 text-4xl">
                  {userInitial}
                </AvatarFallback>
              )}
            </Avatar>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                {user.user_metadata?.full_name ||
                  user.email?.split("@")[0] ||
                  "User"}
              </h1>
              <p className="text-gray-500">{user.email}</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-800">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">
                      {user.user_metadata?.full_name || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Created</p>
                    <p className="font-medium">
                      {new Date(user.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Sign In</p>
                    <p className="font-medium">
                      {new Date(user.last_sign_in_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
