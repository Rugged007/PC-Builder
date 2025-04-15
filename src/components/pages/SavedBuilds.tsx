import { useEffect, useState } from "react";
import { useAuth } from "../../../supabase/auth";
import { supabase } from "../../../supabase/supabase";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  MemoryStick,
  Fan,
  Power,
  Box,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SavedBuild {
  id: string;
  name: string;
  components: Record<string, any>;
  total_price: number;
  created_at: string;
}

export default function SavedBuilds() {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [builds, setBuilds] = useState<SavedBuild[]>([]);
  const [loading, setLoading] = useState(true);
  const [buildToDelete, setBuildToDelete] = useState<string | null>(null);

  // Currency conversion rate
  const usdToInr = 75;

  // Component icons mapping
  const componentIcons: Record<string, React.ReactNode> = {
    cpu: <Cpu className="h-4 w-4" />,
    gpu: <Monitor className="h-4 w-4" />,
    motherboard: <Box className="h-4 w-4" />,
    ram: <MemoryStick className="h-4 w-4" />,
    storage: <HardDrive className="h-4 w-4" />,
    cooling: <Fan className="h-4 w-4" />,
    psu: <Power className="h-4 w-4" />,
    case: <Box className="h-4 w-4" />,
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchSavedBuilds();
  }, [user]);

  const fetchSavedBuilds = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("saved_builds")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBuilds(data || []);
    } catch (error) {
      console.error("Error fetching saved builds:", error);
      toast({
        title: "Error",
        description: "Failed to load your saved builds",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteBuild = async (id: string) => {
    try {
      const { error } = await supabase
        .from("saved_builds")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setBuilds(builds.filter((build) => build.id !== id));
      toast({
        title: "Build Deleted",
        description: "Your build has been deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting build:", error);
      toast({
        title: "Error",
        description: "Failed to delete your build",
        variant: "destructive",
      });
    } finally {
      setBuildToDelete(null);
    }
  };

  const loadBuild = (build: SavedBuild) => {
    // Store components in localStorage
    localStorage.setItem(
      "selectedComponents",
      JSON.stringify(build.components),
    );
    // Navigate to component selection page
    navigate("/component-selection");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Your Saved Builds
          </h1>
          <Link to="/component-selection">
            <Button className="bg-blue-600 text-white hover:bg-blue-500">
              Create New Build
            </Button>
          </Link>
        </div>

        {builds.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md border border-blue-100 p-8 text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              No Saved Builds Yet
            </h2>
            <p className="text-gray-600 mb-6">
              You haven't saved any PC builds yet. Start creating your custom PC
              now!
            </p>
            <Link to="/component-selection">
              <Button className="bg-blue-600 text-white hover:bg-blue-500">
                Start Building
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <Card
                key={build.id}
                className="border-blue-100 hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <CardTitle>{build.name}</CardTitle>
                  <CardDescription>
                    Created on {new Date(build.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(build.components).map(
                        ([type, component]) => {
                          if (!component) return null;
                          return (
                            <div key={type} className="flex items-center gap-2">
                              <div className="bg-blue-100 p-1 rounded-full">
                                {componentIcons[type]}
                              </div>
                              <span className="text-sm text-gray-700 truncate">
                                {component.name}
                              </span>
                            </div>
                          );
                        },
                      )}
                    </div>

                    <Separator className="my-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Total Price:
                      </span>
                      <span className="font-bold text-blue-900">
                        ₹
                        {(build.total_price * usdToInr).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <AlertDialog
                    open={buildToDelete === build.id}
                    onOpenChange={(open) => !open && setBuildToDelete(null)}
                  >
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                        onClick={() => setBuildToDelete(build.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete your saved build.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => deleteBuild(build.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => loadBuild(build)}
                  >
                    Load Build
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
