export function RemoveEndWithSlash(_path: string) {
    if (_path.endsWith("/")) _path = _path.slice(0, _path.length - 1);
    return _path;
}