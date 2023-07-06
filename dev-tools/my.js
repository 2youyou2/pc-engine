
if (!pc.setBlendState) {
    pc.setBlendState = function () {}
}
if (!pc.BlendState) {
    pc.BlendState = {}
}

async function saveGlb (obj) {
    if (!obj) {
        obj = pc.app.root.findByName('MapHolder')
    }
    let b = new pcx.GltfExporter()
    let ab = await b.build(obj)
        const blob = new Blob([ab], { type: 'application/octet-stream' });

    saveAs(blob, 'test.glb')
}
