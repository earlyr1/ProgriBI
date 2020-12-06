import typing
import logging

from aiohttp import web

async def echo(request: web.Request) -> web.Response:
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)

async def newTableFromFile(request: web.Request) -> web.Response:
    reader = await request.post()
    logging.warning(reader['file'].file.read())
    

    return web.Response(status=201, body='{\"id\": 2}')