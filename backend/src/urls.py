import typing

from aiohttp import web

def echo(request: web.Request) -> web.Response:
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)