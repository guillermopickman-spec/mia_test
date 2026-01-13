// API response transformers
// Maps backend API response format to frontend types

import type { HealthStatus, MissionStats } from "./mockApi";

// Backend health response format
interface BackendHealthResponse {
  status: "ok" | "degraded";
  database: string; // "up" or "error: <message>"
  chromadb: string; // "up" or "error: <message>"
  server_time: string; // ISO timestamp
}

// Backend stats response format
interface BackendStatsResponse {
  total_missions: number;
  completed_missions: number;
  failed_missions: number;
}

/**
 * Transform backend health response to frontend HealthStatus format
 */
export function transformHealthResponse(
  backendResponse: BackendHealthResponse
): HealthStatus {
  // Map status: "ok" -> "healthy", "degraded" -> "degraded"
  const status =
    backendResponse.status === "ok" ? "healthy" : backendResponse.status;

  // Map database: "up" -> "online", anything else -> "offline"
  const database = backendResponse.database === "up" ? "online" : "offline";

  // Map chromadb: "up" -> "online", anything else -> "offline"
  const chromadb = backendResponse.chromadb === "up" ? "online" : "offline";

  return {
    status: status as "healthy" | "degraded" | "down",
    database: database as "online" | "offline",
    chromadb: chromadb as "online" | "offline",
    timestamp: backendResponse.server_time,
  };
}

/**
 * Transform backend stats response to frontend MissionStats format
 */
export function transformStatsResponse(
  backendResponse: BackendStatsResponse
): MissionStats {
  const total = backendResponse.total_missions || 0;
  const completed = backendResponse.completed_missions || 0;
  const failed = backendResponse.failed_missions || 0;

  // Calculate success rate: (completed / total) * 100
  // Handle division by zero
  const success_rate =
    total > 0 ? (completed / total) * 100 : 0;

  // Backend doesn't provide in_progress, default to 0
  // Could be calculated as: total - completed - failed
  const in_progress = Math.max(0, total - completed - failed);

  return {
    total,
    completed,
    failed,
    in_progress,
    success_rate: Number(success_rate.toFixed(2)),
  };
}
