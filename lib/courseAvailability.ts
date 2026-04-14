export type CourseAvailabilityStatus = "available" | "interest_only" | "under_process"

export interface CourseAvailability {
  courseId: string
  status: CourseAvailabilityStatus
}

export const COURSE_AVAILABILITY: CourseAvailability[] = [
  // Foundational Programs - Available for enrollment
  { courseId: "foundational-001", status: "available" },
  { courseId: "foundational-002", status: "available" },
  { courseId: "foundational-003", status: "available" },
  { courseId: "foundational-004", status: "available" },
  { courseId: "foundational-005", status: "available" },
  { courseId: "foundational-006", status: "available" },

  // Advanced Intelligence Programs - Interest only
  { courseId: "advanced-001", status: "interest_only" },
  { courseId: "advanced-002", status: "interest_only" },
  { courseId: "advanced-003", status: "interest_only" },
  { courseId: "advanced-004", status: "interest_only" },
  { courseId: "advanced-005", status: "interest_only" },
  { courseId: "advanced-006", status: "interest_only" },

  // Elite R&D Programs - Interest only
  { courseId: "elite-001", status: "interest_only" },
  { courseId: "elite-002", status: "interest_only" },
  { courseId: "elite-003", status: "interest_only" },
  { courseId: "elite-004", status: "interest_only" },
  { courseId: "elite-005", status: "interest_only" },
  { courseId: "elite-006", status: "interest_only" },
]

/**
 * Returns the availability status for a given course.
 * Defaults to "available" if not found in configuration.
 */
export function getCourseAvailability(courseId: string): CourseAvailabilityStatus {
  return COURSE_AVAILABILITY.find((c) => c.courseId === courseId)?.status ?? "available"
}

/**
 * Checks if a course is available for immediate enrollment
 */
export function isCourseAvailable(courseId: string): boolean {
  return getCourseAvailability(courseId) === "available"
}

/**
 * Generates WhatsApp redirect URL with course context
 */
export function getWhatsAppInterestUrl(courseTitle: string, courseId: string): string {
  const phoneNumber = "919342205876"
  const message = `Hello, I am interested in the ${courseTitle} course (${courseId}). Please share details.`
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
