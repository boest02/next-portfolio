import React, { useState, useEffect } from "react";

/**
 * withDataFetching Higher-Order Component (HOC)
 *
 * This HOC provides data fetching capabilities to any wrapped component.
 * It handles loading states and errors, and passes the fetched data as a prop
 * to the wrapped component.
 *
 * @param {React.ComponentType<any>} WrappedComponent - The component to render with the fetched data.
 * @param {React.ComponentType<any>} LoadingComponent - The component to display while data is being fetched.
 * @returns {React.FC<{ url: string }>} A new React component that handles data fetching.
 */
const withDataFetching = <T, P extends object = {}>(
  WrappedComponent: React.ComponentType<{ data: T } & P>,
  LoadingComponent: React.ComponentType<unknown>
) => {
  // This is the component that the user will actually render.
  // It takes 'url' as a prop, along with any other props meant for WrappedComponent.
  return function WithDataFetcher({ url, ...props }: { url: string } & P) {
    // State variables with explicit type annotations
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true); // Set loading to true at the start of fetch
          setError(null); // Clear any previous errors

          const response = await fetch(url);

          if (!response.ok) {
            // If response is not OK (e.g., 404, 500), throw an error
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // We're casting the fetched data to the generic type T
          const result: T = await response.json();
          setData(result); // Set the fetched data
        } catch (err: unknown) {
          setError(err instanceof Error ? err : new Error(String(err))); // Catch and set any errors during fetch
          console.error("Error fetching data:", err);
        } finally {
          setLoading(false); // Always set loading to false when fetch is complete (success or error)
        }
      };

      // Only fetch if a URL is provided
      if (url) {
        fetchData();
      } else {
        setLoading(false); // If no URL, stop loading immediately
      }
    }, [url]); // Re-run effect if the URL changes

    if (loading) {
      // Render the LoadingComponent while data is being fetched
      return <LoadingComponent />;
    }

    if (error) {
      // Render an error message or a specific error component
      return (
        <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
          Error: {error.message}
        </div>
      );
    }

    if (!data || (Array.isArray(data) && data.length === 0)) {
      // Handle cases where data is null, or an empty array
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No data available.
        </div>
      );
    }

    // Render the WrappedComponent, passing the fetched data and any other props
    // Pass all props except 'url' to WrappedComponent
    return <WrappedComponent data={data as T} {...(props as P)} />;
  };
};

export default withDataFetching;
