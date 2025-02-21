CREATE TABLE "documents" (
	"id" serial PRIMARY KEY NOT NULL,
	"source" text NOT NULL,
	"page" integer NOT NULL,
	"content" text NOT NULL,
	"embedding" vector(1536)
);
--> statement-breakpoint
CREATE TABLE "queries" (
	"id" serial PRIMARY KEY NOT NULL,
	"query" text NOT NULL,
	"description" text NOT NULL,
	"timestamp" integer NOT NULL,
	"embedding" vector(1536)
);
