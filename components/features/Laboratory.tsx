import { Button } from "@/components/ui/button";
import { useLaboratoryForm } from "@/hooks/useLaboratoryForm";
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
  const { handleSubmit, formData, handleChange, isLoading, completion } =
    useLaboratoryForm();
  console.log("Completion:", completion);
  return (
    <div className="w-full h-full bg-red-400 flex flex-row justify-between items-center p-10">
      {/* Prompt Input Section */}
      <form
        className="w-1/2 h-full flex flex-col justify-start items-start gap-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <nav>
          <h2 className="text-3xl font-semibold mb-4">Prompt Input</h2>
          <div>
            <select name="model" value={formData.model} onChange={handleChange}>
              <option value="claude-3-opus-20250219">Claude Opus</option>
              <option value="claude-3-sonnet-20250229">Claude Sonnet</option>
            </select>
            <div>
              <input
                type="range"
                name="temperature"
                min="0"
                max="1"
                step="0.1"
                value={formData.temperature}
                onChange={handleChange}
              />
            </div>
          </div>
        </nav>
        <Textarea
          placeholder="Enter your prompt here..."
          className="w-full"
          name="prompt"
          value={formData.prompt}
          onChange={handleChange}
        />
        <Button type="submit" className="mt-4">
          Analize your prompt
        </Button>
      </form>
      <section className="flex flex-col h-full justify-between">
        {/* Answer Response Section */}
        <nav>
          <h2 className="text-3xl font-semibold mb-4">Answer</h2>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" type="button">
                  Raw response
                </Button>
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
          <section className="w-1/2 ...">
            {/* Aquí mostramos la respuesta */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-semibold mb-4">Response</h2>
              {completion ? (
                <div className="whitespace-pre-wrap">{completion}</div>
              ) : (
                <p className="text-zinc-500 italic">
                  Waiting for your prompt...
                </p>
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
