export async function mk_file(path,content='') {
    var paths = path.split('/');
    var len = paths.length;
    var dir_path = paths.slice(0, len-1);
    await fs.mkdir(dir_path.join('/'), { recursive: true });
    await fs.writeFile(path, content);
}