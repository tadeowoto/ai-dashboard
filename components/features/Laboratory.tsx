import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Laboratory() {
  return (
    <div className="w-full h-full bg-red-400 flex flex-row justify-between items-center p-10">
      {/* Prompt Input Section */}
      <section className="w-1/2 h-full flex flex-col justify-start items-start gap-10">
        <nav>
          <h2 className="text-3xl font-semibold mb-4">Prompt Input</h2>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Gemini 2.5</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel></DropdownMenuLabel>
                  <DropdownMenuItem>Models cooming soon</DropdownMenuItem>
                  <DropdownMenuItem>Models cooming soon</DropdownMenuItem>
                  <DropdownMenuItem>Models cooming soon</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div>{/* Temperature goes here*/}</div>
          </div>
        </nav>
        <div>
          <form action="">
            <Textarea placeholder="Enter your prompt here..." />
            <Button type="submit" className="mt-4">
              Analize your prompt
            </Button>
          </form>
        </div>
      </section>
      <section>
        {/* Answer Response Section */}
        <nav>
          <h2 className="text-3xl font-semibold mb-4">Answer</h2>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Raw response</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel></DropdownMenuLabel>
                  <DropdownMenuItem>
                    Json response cooming soon
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Response</h2>
          <p>
            Here will be the response of the model, with all the analysis and
            insights about the prompt you entered.
          </p>
        </div>
      </section>
    </div>
  );
}
