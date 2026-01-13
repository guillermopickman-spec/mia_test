// API utility for making requests to the backend
// Supports both real API calls and mock mode

const getApiUrl = () => {
  if (typeof window === "undefined") return "";
  return process.env.NEXT_PUBLIC_API_URL || "";
};

const useMockApi = () => {
  return process.env.NEXT_PUBLIC_USE_MOCK_API === "true";
};

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    if (useMockApi()) {
      // In mock mode, we'll handle this in queries.ts
      throw new Error("Mock API should be handled in queries.ts");
    }

    const url = `${getApiUrl()}${endpoint}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  },

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    if (useMockApi()) {
      throw new Error("Mock API should be handled in queries.ts");
    }

    const url = `${getApiUrl()}${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  },
};
