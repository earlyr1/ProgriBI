from aiohttp import web

from src.urls import echo, newTableFromFile

app = web.Application()
app.add_routes([
                web.get('/api/echo/', echo),
                web.post('/api/tables', newTableFromFile)
               ])

if __name__ == '__main__':
    web.run_app(app, port=5000)