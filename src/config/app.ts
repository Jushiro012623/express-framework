import 'dotenv/config';

/**
 * Application configuration structure.
 */
interface Config {
    /** 
     * Port number where the server runs. 
     * Defaults to 5000 if not provided via `PORT` environment variable. 
     */
    port: number;

    /** 
     * Current environment (e.g., "development", "production", "test"). 
     * Defaults to "development". 
     */
    nodeEnv: string;

    /** 
     * Base URL for API routes. 
     * Defaults to "/api/v1". 
     */
    url: string;

    /** 
     * Server timezone. 
     * Default is "Asia/Manila". 
     */
    timezone: string;

    /** 
     * Default locale/language code. 
     * Default is "en". 
     */
    locale: string;

    /** 
     * Enable debug mode. 
     * Derived from `APP_DEBUG` environment variable (true/false). 
     */
    debug: boolean;
}

/**
 * Application configuration loaded from environment variables.
 * 
 * Values are parsed and normalized with sane defaults so the app can run
 * even when some environment variables are missing.
 */
const config = {
    port: parseInt(process.env.PORT ?? '5001', 10),
    nodeEnv: process.env.NODE_ENV ?? 'development',
    url: process.env.BASE_URL ?? '/api/v1',
    timezone: 'Asia/Manila',
    locale: 'en',
    debug: (process.env.APP_DEBUG ?? 'false') === 'true'
} satisfies Config;

export default config;
