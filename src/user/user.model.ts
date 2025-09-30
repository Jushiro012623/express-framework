export type User = {
    id: number,
    username: string,
    email: string,
    password: string,
    created_at: string,
    updated_at: string
}


export const users = [
    {
        id: 1,
        username: "idevx",
        email: "idevx@gmail.com",
        password: "0bd181063899c9239016320b50d3e896693a96df",
        created_at: "29-09-2025 16:30:54",
        updated_at: "29-09-2025 16:30:54"
    },
    {
        id: 2,
        username: "lina_dev",
        email: "lina.dev@example.com",
        password: "3a8f6b2c1d4e5f67890abcde1234567890fedcba",
        created_at: "29-09-2025 16:45:10",
        updated_at: "29-09-2025 16:45:10"
    },
    {
        id: 3,
        username: "marco99",
        email: "marco99@example.com",
        password: "9f8e7d6c5b4a39281716151413121110abcdef12",
        created_at: "29-09-2025 17:02:33",
        updated_at: "29-09-2025 17:02:33"
    },
    {
        id: 4,
        username: "dev_anais",
        email: "anais.dev@example.com",
        password: "a1b2c3d4e5f60718293a4b5c6d7e8f9012345678",
        created_at: "29-09-2025 17:20:01",
        updated_at: "29-09-2025 17:20:01"
    },
    {
        id: 5,
        username: "rico_codes",
        email: "rico.codes@example.com",
        password: "5f4dcc3b5aa765d61d8327deb882cf99abcdef01",
        created_at: "29-09-2025 17:45:12",
        updated_at: "29-09-2025 17:45:12"
    },
    {
        id: 6,
        username: "sara_t",
        email: "sara.trina@example.com",
        password: "c0ffee1234567890abcdef1234567890deadbeef",
        created_at: "29-09-2025 18:10:05",
        updated_at: "29-09-2025 18:10:05"
    },
    {
        id: 7,
        username: "admin_test",
        email: "admin@example.com",
        password: "ffffffffffffffffffffffffffffffffffffffff",
        created_at: "29-09-2025 18:30:00",
        updated_at: "29-09-2025 18:30:00"
    }
] satisfies User[];


