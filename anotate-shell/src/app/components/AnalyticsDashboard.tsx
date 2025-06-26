
// import { 
//   BarChart, 
//   LineChart, 
//   PieChart, 
//   Table, 
//   Download, 
//   RefreshCw,
//   Info
// } from "lucide-react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@bosch-annotate/anotate-controls";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@bosch-annotate/anotate-controls";
// import { Button, Badge } from "@bosch-annotate/anotate-controls";
// import {
//   BarChart as RechartsBarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart as RechartsPieChart,
//   Pie,
//   Cell,
//   LineChart as RechartsLineChart,
//   Line,
//   Legend
// } from "recharts";
// import { DashboardService } from '@bosch-annotate/anotate-services'
// import { useEffect, useRef, useState } from "react";
// import { Item } from "@radix-ui/react-accordion";

// // Sample data for charts
// const annotationsPerDateData = [
//   { date: "2023-04-10", count: 120 },
//   { date: "2023-04-11", count: 145 },
//   { date: "2023-04-12", count: 132 },
//   { date: "2023-04-13", count: 167 },
//   { date: "2023-04-14", count: 179 },
//   { date: "2023-04-15", count: 156 },
//   { date: "2023-04-16", count: 188 },
// ];

// const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#E5DEFF"];
// type Item = { name: string; value: number };

// export const AnalyticsDashboard = () => {
//   const [classDistributionData, setclassDistributionData] = useState<Item[]>([])
  
//   const dashboardService = useRef<DashboardService>(
//     new DashboardService('Dashboard'),
//   )

//   useEffect(() => {
//      dashboardService.current.fetchclassDistributionData().then((data:Item[]) => {
//         setclassDistributionData(data)
//      })
//   },[])

//   return (
//     <div className="w-full">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
//           <p className="text-muted-foreground">
//             Overview and insights for your image dataset and annotations
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <Button variant="outline" size="sm">
//             <RefreshCw className="mr-2 h-4 w-4" />
//             Refresh
//           </Button>
//           <Button variant="default" size="sm">
//             <Download className="mr-2 h-4 w-4" />
//             Export Report
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-lg">Total Images</CardTitle>
//             <CardDescription>Across all datasets</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">3,452</div>
//             <p className="text-sm text-muted-foreground">
//               <span className="text-green-500">+12%</span> from last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-lg">Total Annotations</CardTitle>
//             <CardDescription>All bounding boxes</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">9,745</div>
//             <p className="text-sm text-muted-foreground">
//               <span className="text-green-500">+24%</span> from last month
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-lg">Annotation Quality</CardTitle>
//             <CardDescription>Average score</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">92%</div>
//             <p className="text-sm text-muted-foreground">
//               <span className="text-green-500">+3%</span> from last month
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       <Tabs defaultValue="distributions" className="w-full">
//         <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex md:grid-cols-none mb-4">
//           <TabsTrigger value="distributions">Class Distributions</TabsTrigger>
//           <TabsTrigger value="trends">Annotation Trends</TabsTrigger>
//           <TabsTrigger value="quality">Quality Metrics</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="distributions" className="space-y-6">
//           <Card>
//             <CardHeader>
//               <div className="flex justify-between">
//                 <div>
//                   <CardTitle>Class Distribution</CardTitle>
//                   <CardDescription>Distribution of object classes in your dataset</CardDescription>
//                 </div>
//                 <Badge variant="outline" className="gap-1">
//                   <Info className="h-3 w-3" />
//                   5 classes
//                 </Badge>
//               </div>
//             </CardHeader>
//             <CardContent className="flex flex-col md:flex-row">
//               <div className="w-full md:w-1/2 h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <RechartsBarChart
//                     data={classDistributionData}
//                     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="value" fill="#9b87f5" />
//                   </RechartsBarChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="w-full md:w-1/2 h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <RechartsPieChart>
//                     <Pie
//                       data={classDistributionData}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                       label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
//                     >
//                       {classDistributionData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </RechartsPieChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button variant="outline">
//                 <Download className="mr-2 h-4 w-4" />
//                 Export as CSV
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>

//         <TabsContent value="trends" className="space-y-6">
//           <Card>
//             <CardHeader>
//               <div className="flex justify-between">
//                 <div>
//                   <CardTitle>Annotation Trends</CardTitle>
//                   <CardDescription>Number of annotations over time</CardDescription>
//                 </div>
//                 <Badge variant="outline" className="gap-1">
//                   <Info className="h-3 w-3" />
//                   Last 7 days
//                 </Badge>
//               </div>
//             </CardHeader>
//             <CardContent className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <RechartsLineChart
//                   data={annotationsPerDateData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="count" stroke="#9b87f5" activeDot={{ r: 8 }} />
//                 </RechartsLineChart>
//               </ResponsiveContainer>
//             </CardContent>
//             <CardFooter>
//               <Button variant="outline">
//                 <Download className="mr-2 h-4 w-4" />
//                 Export as CSV
//               </Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>

//         <TabsContent value="quality" className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Quality Metrics</CardTitle>
//               <CardDescription>Annotation quality assessment</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="text-center py-12">
//                 <h3 className="text-lg font-medium mb-2">Quality metrics coming soon</h3>
//                 <p className="text-muted-foreground mb-4">
//                   We're working on advanced quality assessment tools
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };


import {
  BarChart,
  LineChart,
  PieChart,
  Table,
  Download,
  RefreshCw,
  Info
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Badge
} from "@bosch-annotate/anotate-controls";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
  Legend
} from "recharts";
import { DashboardService } from '@bosch-annotate/anotate-services';
import { useEffect, useRef, useState } from "react";

const annotationsPerDateData = [
  { date: "2023-04-10", count: 120 },
  { date: "2023-04-11", count: 145 },
  { date: "2023-04-12", count: 132 },
  { date: "2023-04-13", count: 167 },
  { date: "2023-04-14", count: 179 },
  { date: "2023-04-15", count: 156 },
  { date: "2023-04-16", count: 188 },
];

const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#D6BCFA", "#E5DEFF"];
type Item = { name: string; value: number };

export const AnalyticsDashboard = () => {
  const [totalImages, setTotalImages] = useState<number>(0);
  const [totalAnnotations, setTotalAnnotations] = useState<number>(0);
  const [averageQuality, setAverageQuality] = useState<number>(0);
  const [classDistributionData, setclassDistributionData] = useState<Item[]>([]);

  const dashboardService = useRef<DashboardService>(
    new DashboardService('Dashboard')
  );

  useEffect(() => {
    const ds = dashboardService.current;

    ds.fetchTotalImages().then(setTotalImages);
    ds.fetchTotalAnnotations().then(setTotalAnnotations);
    ds.fetchAverageQuality().then(setAverageQuality);
    ds.fetchclassDistributionData().then(setclassDistributionData);
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            Overview and insights for your image dataset and annotations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="default" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Images</CardTitle>
            <CardDescription>Across all datasets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalImages}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Annotations</CardTitle>
            <CardDescription>All bounding boxes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalAnnotations}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Annotation Quality</CardTitle>
            <CardDescription>Average score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{averageQuality}%</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="distributions" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex md:grid-cols-none mb-4">
          <TabsTrigger value="distributions">Class Distributions</TabsTrigger>
          <TabsTrigger value="trends">Annotation Trends</TabsTrigger>
          <TabsTrigger value="quality">Quality Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="distributions" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Class Distribution</CardTitle>
                  <CardDescription>Distribution of object classes in your dataset</CardDescription>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Info className="h-3 w-3" />
                  {classDistributionData.length} classes
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={classDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#9b87f5" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={classDistributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      dataKey="value"
                    >
                      {classDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export as CSV
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>Annotation Trends</CardTitle>
                  <CardDescription>Number of annotations over time</CardDescription>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Info className="h-3 w-3" />
                  Last 7 days
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={annotationsPerDateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#9b87f5" activeDot={{ r: 8 }} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
            <CardFooter>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export as CSV
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quality Metrics</CardTitle>
              <CardDescription>Annotation quality assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Quality metrics coming soon</h3>
                <p className="text-muted-foreground mb-4">
                  We're working on advanced quality assessment tools
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
