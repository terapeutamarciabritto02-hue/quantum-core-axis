axis-core/
├── apps/
│   ├── frontend/                          # Next.js 15 + TypeScript
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── (dashboard)/
│   │   │   │   ├── admin/
│   │   │   │   │   ├── therapists/page.tsx
│   │   │   │   │   ├── clients/page.tsx
│   │   │   │   │   ├── sessions/page.tsx
│   │   │   │   │   ├── reports/page.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── therapist/
│   │   │   │   │   ├── clients/page.tsx
│   │   │   │   │   ├── sessions/page.tsx
│   │   │   │   │   ├── engine/page.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── client/
│   │   │   │   │   ├── history/page.tsx
│   │   │   │   │   ├── reports/page.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── student/
│   │   │   │   │   ├── courses/page.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── api/[...route]/route.ts
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── ui/                        # shadcn/ui components
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   └── RoleGuard.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   └── StatsCard.tsx
│   │   │   ├── engine/
│   │   │   │   ├── TableSelector.tsx
│   │   │   │   ├── TableDisplay.tsx
│   │   │   │   └── SessionControls.tsx
│   │   │   ├── sessions/
│   │   │   │   ├── SessionCard.tsx
│   │   │   │   └── TelemetryFeed.tsx
│   │   │   └── shared/
│   │   │       ├── DataTable.tsx
│   │   │       └── StatusBadge.tsx
│   │   ├── lib/
│   │   │   ├── supabase/
│   │   │   │   ├── client.ts              # Browser client
│   │   │   │   └── server.ts              # Server client (SSR)
│   │   │   ├── api/
│   │   │   │   └── client.ts              # Axios/fetch wrapper para FastAPI
│   │   │   ├── websocket/
│   │   │   │   └── client.ts              # WebSocket manager
│   │   │   ├── store/
│   │   │   │   ├── auth.ts                # Zustand auth store
│   │   │   │   └── session.ts             # Zustand session store
│   │   │   └── utils.ts
│   │   ├── hooks/
│   │   │   ├── useAuth.ts
│   │   │   ├── useSession.ts
│   │   │   ├── useWebSocket.ts
│   │   │   └── useEngine.ts
│   │   ├── types/
│   │   │   ├── auth.ts
│   │   │   ├── session.ts
│   │   │   ├── engine.ts
│   │   │   └── api.ts
│   │   ├── middleware.ts                  # RBAC + auth guard
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   └── backend/                           # FastAPI + Python 3.12
│       ├── app/
│       │   ├── main.py
│       │   ├── config.py
│       │   ├── dependencies.py
│       │   ├── api/
│       │   │   ├── router.py
│       │   │   └── v1/
│       │   │       ├── auth.py
│       │   │       ├── users.py
│       │   │       ├── clients.py
│       │   │       ├── therapists.py
│       │   │       ├── sessions.py
│       │   │       ├── reports.py
│       │   │       ├── telemetry.py
│       │   │       ├── engine.py
│       │   │       └── courses.py
│       │   ├── core/
│       │   │   ├── security.py            # JWT + Supabase token verify
│       │   │   ├── permissions.py         # RBAC engine
│       │   │   └── exceptions.py
│       │   ├── models/                    # SQLAlchemy ORM (leitura)
│       │   ├── schemas/                   # Pydantic v2
│       │   ├── services/                  # Business logic
│       │   ├── websocket/
│       │   │   ├── manager.py
│       │   │   └── handlers.py
│       │   ├── mqtt/
│       │   │   ├── client.py
│       │   │   └── handlers.py
│       │   └── db/
│       │       └── supabase.py
│       ├── tests/
│       ├── requirements.txt
│       ├── Dockerfile
│       └── render.yaml
│
├── packages/
│   ├── core/                              # Tipos compartilhados TS
│   ├── engine/                            # AxisEngine modular
│   │   └── src/
│   │       ├── registry.ts
│   │       ├── loader.ts
│   │       └── tables/                    # JSON das mesas
│   └── shared/                            # Utilitários comuns
│
├── docs/
├── infra/
│   ├── supabase/migrations/
│   └── docker-compose.yml
├── turbo.json
├── package.json
└── .env.example