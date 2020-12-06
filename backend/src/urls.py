import typing

from aiohttp import web

async def echo(request: web.Request) -> web.Response:
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)

async def newTableFromFile(request: web.Request) -> web.Response:
    print(request)
    return web.Response(text="kek")