from aiohttp import web

from src.urls import echo

app = web.Application()
app.add_routes([web.get('/api/echo/', echo)])

if __name__ == '__main__':
    web.run_app(app, port=5000)