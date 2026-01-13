// API utility for making requests to the backend
// Supports both real API calls and mock mode

const API_TIMEOUT = 10000; // 10 seconds

const getApiUrl = () => {
  if (typeof window === "undefined") return "";
  return process.env.NEXT_PUBLIC_API_URL || "";
};

const useMockApi = () => {
  return process.env.NEXT_PUBLIC_USE_MOCK_API === "true";
};

const isDevelopment = () => {
  return process.env.NODE_ENV === "development";
};

// Create a fetch with timeout
const fetchWithTimeout = async (
  url: string,
  options: RequestInit = {},
  timeout: number = API_TIMEOUT
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Request timeout after ${timeout}ms`);
    }
    throw error;
  }
};

// Enhanced error handling
const handleApiError = (error: unknown, endpoint: string): Error => {
  if (error instanceof Error) {
    // Network errors
    if (error.message.includes("timeout")) {
      return new Error(`Request to ${endpoint} timed out. Backend may be slow or unavailable.`);
    }
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      return new Error(`Cannot connect to backend. Check if ${getApiUrl()} is accessible.`);
    }
    // CORS errors
    if (error.message.includes("CORS") || error.message.includes("cross-origin")) {
      return new Error(`CORS error: Backend may not allow requests from this origin.`);
    }
    return error;
  }
  return new Error(`Unknown error occurred while calling ${endpoint}`);
};

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    if (useMockApi()) {
      // In mock mode, we'll handle this in queries.ts
      throw new Error("Mock API should be handled in queries.ts");
    }

    const apiUrl = getApiUrl();
    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const url = `${apiUrl}${endpoint}`;

    if (isDevelopment()) {
      console.log(`[API] GET ${url}`);
    }

    try {
      const response = await fetchWithTimeout(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => response.statusText);
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ""}`
        );
      }

      const data = await response.json();

      if (isDevelopment()) {
        console.log(`[API] GET ${url} - Success`, data);
      }

      return data as T;
    } catch (error) {
      const enhancedError = handleApiError(error, endpoint);
      if (isDevelopment()) {
        console.error(`[API] GET ${url} - Error`, enhancedError);
      }
      throw enhancedError;
    }
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    if (useMockApi()) {
      throw new Error("Mock API should be handled in queries.ts");
    }

    const apiUrl = getApiUrl();
    if (!apiUrl) {
      throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const url = `${apiUrl}${endpoint}`;

    if (isDevelopment()) {
      console.log(`[API] POST ${url}`, data);
    }

    try {
      const response = await fetchWithTimeout(
        url,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
        API_TIMEOUT
      );

      if (!response.ok) {
        const errorText = await response.text().catch(() => response.statusText);
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}${errorText ? ` - ${errorText}` : ""}`
        );
      }

      const result = await response.json();

      if (isDevelopment()) {
        console.log(`[API] POST ${url} - Success`, result);
      }

      return result as T;
    } catch (error) {
      const enhancedError = handleApiError(error, endpoint);
      if (isDevelopment()) {
        console.error(`[API] POST ${url} - Error`, enhancedError);
      }
      throw enhancedError;
    }
  },
};
