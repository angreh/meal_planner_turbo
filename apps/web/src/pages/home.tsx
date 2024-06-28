import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeContent as Content } from "@/components/pages/home/content";

export const HomePage = () => (
  <Card>
    <CardHeader>
      <CardTitle>Home Page</CardTitle>
    </CardHeader>

    <CardContent>
      <Content />
    </CardContent>
  </Card>
);
