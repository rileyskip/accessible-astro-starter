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
      'E-ZPass users often learned about account problems too late. Balances, violations, and fees were hard to find in the existing experience.',
    solution:
      'A mobile interface that shows account status clearly, sends timely alerts, and gives users direct paths to add funds or pay violations.',
    image: '/projects/ezpass-nj/good-standing.png',
    imageCompact: true,
  },
  'project-08': {
    problem:
      'Rutgers lifelong learning programs used separate systems. Students and staff had difficulty finding courses, managing listings, and completing registration.',
    solution:
      'Course Hub, a single application that supports multiple departments with shared navigation, course management tools, and a consistent registration flow.',
    image: '/projects/coursehub/mbs-catalog.png',
  },
  'project-04': {
    problem:
      'Content teams needed a CMS that supported publishing, accessibility, and editorial control at scale.',
    solution:
      'Drupal websites with structured templates, WCAG-aligned components, and workflows that editors can use with confidence.',
    image: '/projects/statewide.png',
  },
  'project-03': {
    problem:
      'Personal finance tools often present large amounts of data without clear next steps for the user.',
    solution:
      'A React dashboard that organizes spending data and presents it in a way that supports budgeting decisions.',
    image: '/projects/expensely-shot.png',
  },
  'project-09': {
    problem:
      'A local home inspection business had limited online presence and needed a site that would build trust with potential clients.',
    solution:
      'A brand identity and website that presents services clearly and can be maintained by the client.',
    image: '/projects/eclipseinspection/eclipseinspection-home.png',
  },
  'project-06': {
    problem: 'The project needed a simple way to log and review data over time.',
    solution:
      'A web application for tracking entries with a clear interface and persistent data storage.',
    image: '/projects/hotdog.png',
  },
  'project-02': {
    problem:
      'Static presentations did not show how an interactive experience would feel to users.',
    solution:
      'An interactive Figma prototype that demonstrates layout, flow, and interaction before development begins.',
    image: '/projects/dreamvision-figma.png',
  },
  'project-07': {
    problem: 'An older Drupal theme made content difficult to read, update, and maintain.',
    solution: 'Drupal 10 theme updates with clearer hierarchy and reusable interface patterns.',
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
      problem: 'Users had difficulty completing a common task in the product.',
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
