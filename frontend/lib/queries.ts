"use client";

import { useState, useEffect } from "react";
import { mockApi, type HealthStatus, type MissionStats, type Report, type Activity } from "./mockApi";
import { api } from "./api";
import { transformHealthResponse, transformStatsResponse } from "./apiTransformers";

// Check if we should use mock API (works on both server and client)
const useMockApi = () => {
  // In Next.js, NEXT_PUBLIC_* env vars are available on both server and client
  return process.env.NEXT_PUBLIC_USE_MOCK_API === "true";
};

// Health check hook
export function useHealthCheck() {
  const [data, setData] = useState<HealthStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const fetchHealth = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (useMockApi()) {
          const health = await mockApi.getHealth();
          setData(health);
        } else {
          // Real API call with transformation
          const backendResponse = await api.get<{
            status: "ok" | "degraded";
            database: string;
            chromadb: string;
            server_time: string;
          }>("/health");
          const transformed = transformHealthResponse(backendResponse);
          setData(transformed);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealth();
    
    // Poll every 30 seconds
    const interval = setInterval(fetchHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  return { data, isLoading, error };
}

// Mission statistics hook
export function useMissionStats() {
  const [data, setData] = useState<MissionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const fetchStats = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (useMockApi()) {
          const stats = await mockApi.getStats();
          setData(stats);
        } else {
          // Real API call with transformation
          const backendResponse = await api.get<{
            total_missions: number;
            completed_missions: number;
            failed_missions: number;
          }>("/stats");
          const transformed = transformStatsResponse(backendResponse);
          setData(transformed);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
    
    // Refresh every 10 seconds
    const interval = setInterval(fetchStats, 10000);
    return () => clearInterval(interval);
  }, []);

  return { data, isLoading, error };
}

// Reports hook
export function useReports() {
  const [data, setData] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const fetchReports = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (useMockApi()) {
          const reports = await mockApi.getReports();
          setData(reports);
        } else {
          // Real API call would go here
          throw new Error("Real API not yet implemented");
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  return { data, isLoading, error, refetch: () => {
    if (typeof window === "undefined") return;
    const fetchReports = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (useMockApi()) {
          const reports = await mockApi.getReports();
          setData(reports);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };
    fetchReports();
  }};
}

// Recent activity hook
export function useActivity() {
  const [data, setData] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const fetchActivity = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (useMockApi()) {
          const activity = await mockApi.getActivity();
          setData(activity);
        } else {
          // Real API call would go here
          throw new Error("Real API not yet implemented");
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchActivity();
    
    // Refresh every 15 seconds
    const interval = setInterval(fetchActivity, 15000);
    return () => clearInterval(interval);
  }, []);

  return { data, isLoading, error };
}
