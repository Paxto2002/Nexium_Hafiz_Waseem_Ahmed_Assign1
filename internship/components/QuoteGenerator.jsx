"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { quotes } from "@/components/Quote";

// Zod Schema: topic must contain at least one word
const formSchema = z.object({
  topic: z.string().regex(/\w+/, { message: "At least one word required" }),
});

export default function QuoteGenerator() {
  const [matchedQuotes, setMatchedQuotes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchedTopic, setSearchedTopic] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
    },
  });

  const onSubmit = (values) => {
    const topic = values.topic.trim().toLowerCase();
    const foundQuotes = quotes[topic] || [];
    setMatchedQuotes(foundQuotes.slice(0, 3)); // Limit to 3 quotes
    setHasSearched(true); // Mark that user has searched
    form.reset(); // Reset form after submission
    setSearchedTopic(topic);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 space-y-6 overflow-x-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">
        <span className="mr-2">✨</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
          Quote Genie: Rub the Lamp, Get Inspired!
        </span>
      </h1>

      <p className="text-center text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto break-words">
        Type in a magic word like{" "}
        <span className="text-yellow-300 font-medium">“success”</span>,{" "}
        <span className="text-pink-400 font-medium">“motivation”</span>,{" "}
        <span className="text-blue-400 font-medium">“perseverance”</span>,{" "}
        <span className="text-green-400 font-medium">“discipline”</span>,{" "}
        <span className="text-orange-400 font-medium">“growth”</span>,{" "}
        <span className="text-cyan-400 font-medium">“focus”</span>,{" "}
        <span className="text-purple-300 font-medium">“creativity”</span>,{" "}
        <span className="text-rose-400 font-medium">“courage”</span>,{" "}
        <span className="text-lime-400 font-medium">“leadership”</span>,{" "}
        <span className="text-fuchsia-400 font-medium">“learning”</span>,{" "}
        <span className="text-emerald-400 font-medium">“resilience”</span>,{" "}
        <span className="text-violet-400 font-medium">“excellence”</span>, or{" "}
        <span className="text-teal-400 font-medium">“time”</span> — and
        I&apos;ll conjure quotes to fuel your journey!{" "}
        <span className="text-purple-400 text-lg">🧞‍♂️</span>
      </p>

      {/* Form UI */}
      <Form {...form}>
        {" "}
        {/* Injects all the properties of useFrom into this form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="topic">Enter a Topic</FormLabel>
                <FormControl>
                  <Input
                    id="topic"
                    className="input-highlight"
                    placeholder="e.g., success, courage, mindset"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button variant={"paxto"} type="submit" className="w-full">
            Get Quotes
          </Button>
        </form>
      </Form>

      {/* Display Quotes */}
      <div aria-live="polite" className="mt-6 space-y-4">
        {searchedTopic && matchedQuotes.length > 0 && (
          <h2 className="text-center text-xl font-semibold text-gray-200 mt-15 mb-5">
            🔮 Quotes about{" "}
            <span className="capitalize text-yellow-400">{searchedTopic}</span>
          </h2>
        )}

        {matchedQuotes.length > 0 ? (
          matchedQuotes.map((quote, index) => (
            <Card
              key={index}
              className="rounded-2xl p-[1.5px] bg-gradient-to-r from-purple-700 via-indigo-800 to-gray-900 shadow-[0_8px_30px_rgba(93,62,188,0.25)] hover:shadow-[0_12px_40px_rgba(129,94,255,0.4)] hover:scale-[1.015] transition-all duration-300"
            >
              <CardContent className="bg-zinc-950/90 backdrop-blur-md rounded-2xl p-6 text-center border border-zinc-800">
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-blue-200 to-violet-100 italic drop-shadow-sm tracking-wide transition-all duration-300">
                  “{quote}”
                </p>
              </CardContent>
            </Card>
          ))
        ) : hasSearched ? (
          <p className="text-center italic text-gray-300">
            🧞‍♂️ Hmm... the genie found no wisdom for that word. Try a different
            spell!
          </p>
        ) : null}
      </div>
    </div>
  );
}
