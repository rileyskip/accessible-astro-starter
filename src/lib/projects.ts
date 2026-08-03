import { getCollection } from 'astro:content'

export type ProjectBackground = 'brand-blue' | 'brand-cream' | 'brand-orange' | 'brand-lavender'

export type Project = {
  id: string
  name: string
  problem: string
  solution: string
  description: string
  background: ProjectBackground
  href: string
  image: string
  alt: string
  imageCompact?: boolean
}

const backgrounds: ProjectBackground[] = ['brand-blue', 'brand-cream', 'brand-orange', 'brand-lavender']

export const featuredProjectOrder = [
  'project-10',
  'project-08',
  'project-04',
  'project-03',
  'project-09',
  'project-06',
  'project-02',
] as const

const projectMeta: Record<
  string,
  { problem: string; solution: string; image: string; imageCompact?: boolean }
> = {
  'project-10': {
    problem:
      'Drivers were discovering account problems too late — hidden balances, missed violations, and fees that felt deliberately opaque.',
    solution:
      'A mobile experience built for clarity: instant account health, proactive alerts, and payment incentives that reward action before penalties hit.',
    image: '/projects/ezpass-nj/good-standing.png',
    imageCompact: true,
  },
  'project-08': {
    problem:
      'Lifelong learning programs across Rutgers ran on separate, siloed systems — making course discovery, admin workflows, and registration painfully fragmented for students and staff.',
    solution:
      'Course Hub: one unified application that brings departments together with clearer navigation, smarter course management, and a smoother browse-to-checkout flow.',
    image: '/projects/coursehub/mbs-fall-2026.png',
  },
  'project-04': {
    problem:
      'Enterprise content teams needed publishing power without sacrificing accessibility or editorial control.',
    solution:
      'Scalable Drupal platforms with structured templates, WCAG-aligned components, and workflows editors can trust.',
    image: '/projects/statewide.png',
  },
  'project-03': {
    problem:
      'Most finance apps dump data on users without telling them what to do next.',
    solution:
      'A React-powered dashboard that turns spending patterns into clear, actionable insights users can act on immediately.',
    image: '/projects/expensely-shot.png',
  },
  'project-09': {
    problem:
      'A trusted local business had almost no digital footprint — and was losing leads to competitors who looked more credible online.',
    solution:
      'A complete brand identity and client-ready website that builds trust from the first click and stays easy to maintain.',
    image: '/projects/eclipseinspection/eclipseinspection-home.png',
  },
  'project-06': {
    problem: "Tracking a quirky habit shouldn't feel like homework.",
    solution:
      'A playful, interactive tracker that makes logging fun and keeps users coming back.',
    image: '/projects/hotdog.png',
  },
  'project-02': {
    problem:
      "Great stories were getting lost in static decks that couldn't show what the experience would actually feel like.",
    solution:
      'An interactive Figma prototype that brings narrative design to life — ready for testing before a single line of code.',
    image: '/projects/dreamvision-figma.png',
  },
  'project-07': {
    problem: 'An outdated Drupal theme made content hard to scan, update, and maintain.',
    solution: 'Drupal 10 UI improvements with clearer hierarchy and reusable patterns.',
    image: '/projects/admin-edit.png',
  },
}

export function getProjectMeta(id: string) {
  return projectMeta[id]
}

export const workPageSize = 6

type GetProjectsOptions = {
  featuredOnly?: boolean
}

export async function getProjects(options: GetProjectsOptions = {}): Promise<Project[]> {
  const { featuredOnly = false } = options
  const collection = await getCollection('projects')

  const projects = collection.map((project) => {
    const meta = projectMeta[project.id] ?? {
      problem: 'Users faced friction in a complex workflow.',
      solution: project.data.description,
      image: '/projects/project-image-1.png',
    }

    const orderIndex = featuredProjectOrder.indexOf(
      project.id as (typeof featuredProjectOrder)[number],
    )

    return {
      id: project.id,
      name: project.data.title,
      problem: meta.problem,
      solution: meta.solution,
      description: meta.solution,
      background: backgrounds[Math.max(orderIndex, 0) % backgrounds.length],
      href: `/work/${project.id}`,
      image: meta.image,
      alt: `${project.data.title} project preview`,
      imageCompact: meta.imageCompact,
      orderIndex: orderIndex === -1 ? 999 : orderIndex,
    }
  })

  const sorted = projects.sort((a, b) => a.orderIndex - b.orderIndex)

  if (featuredOnly) {
    return featuredProjectOrder
      .map((id, index) => {
        const project = projects.find((item) => item.id === id)
        if (!project) return null

        const { orderIndex, ...rest } = project
        return {
          ...rest,
          background: backgrounds[index % backgrounds.length],
        }
      })
      .filter((project): project is Project => project !== null)
  }

  return sorted.map(({ orderIndex, ...project }) => project)
}
