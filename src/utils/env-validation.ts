/**
 * Validates required environment variables
 * @param variables - Array of required environment variable names
 * @returns Object with validation result
 */
export function validateEnv(variables: string[]) {
    const missing: string[] = [];
    const isBrowser = typeof window !== 'undefined';
    
    // Only validate in browser if the variable is prefixed with PUBLIC_
    for (const variable of variables) {
      if (isBrowser && !variable.startsWith('PUBLIC_')) {
        continue; // Skip server-only variables in browser
      }
      
      if (!import.meta.env[variable]) {
        missing.push(variable);
      }
    }
    
    return {
      isValid: missing.length === 0,
      missing,
    };
  }
  
  /**
   * Gets an environment variable with type safety
   * @param name - Environment variable name
   * @param defaultValue - Default value if not found
   * @returns The environment variable value or default
   */
  export function getEnv<T>(name: string, defaultValue?: T): T | undefined {
    return import.meta.env[name] ?? defaultValue
  }  