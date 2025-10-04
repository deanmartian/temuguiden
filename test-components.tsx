import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

export function TestComponents() {
  return (
    <div className="p-4 space-y-4">
      <Button>Test Button</Button>
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
      <Input placeholder="Test input" />
      <Badge>Test Badge</Badge>
      <Separator />
      <Alert>
        <AlertTitle>Test Alert</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>
      <Textarea placeholder="Test textarea" />
    </div>
  )
}
