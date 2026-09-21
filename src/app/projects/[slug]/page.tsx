import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedProjects, getProjectBySlug } from "@/data/projects";
import { CaseStudy } from "@/components/case-study";
import { site } from "@/config/site";

export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.published) return {};

  return {
    title: project.title.ar,
    description: `${project.short.ar} — ${project.subtitle.ar}`,
    openGraph: {
      title: `${project.title.en} — ${site.name}`,
      description: project.short.en,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.published) notFound();

  return <CaseStudy slug={slug} />;
}
