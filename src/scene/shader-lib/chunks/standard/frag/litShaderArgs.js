export default /* glsl */`

struct IridescenceArgs
{
    // Iridescence effect intensity, range [0..1]
    float intensity;

    // Thickness of the iridescent microfilm layer, value is in nanometers, range [0..1000]
    float thickness;
};

struct ClearcoatArgs
{
    // The normal used for the clearcoat layer
    vec3 worldNormal;

    // Intensity of the clearcoat layer, range [0..1]
    float specularity;

    // Glossiness of clearcoat layer, range [0..1]
    float gloss;
};

struct SheenArgs
{
    // The color of the f0 specularity factor for the sheen layer
    vec3 specularity;

    // Glossiness of the sheen layer, range [0..1]
    float gloss;
};

struct LitShaderArguments {
    // Normal direction in world space
    vec3 worldNormal;

    // Transparency
    float opacity;

    // Surface albedo absorbance
    vec3 albedo;

    // Transmission factor (refraction), range [0..1]
    float transmission;

    // The f0 specularity factor
    vec3 specularity;

    // Uniform thickness of medium, used by transmission, range [0..inf]
    float thickness;

    // Emission color
    vec3 emission;

    // Ambient occlusion amount, range [0..1]
    float ao;

    // Light map color
    vec3 lightmap;

    // Specularity intensity factor, range [0..1]
    float specularityFactor;

    // Light map direction
    vec3 lightmapDir;

    // The microfacet glossiness factor, range [0..1]
    float gloss;

    // Iridescence extension arguments
    IridescenceArgs iridescence;

    // Clearcoat extension arguments
    ClearcoatArgs clearcoat;

    // Surface metalness factor, range [0..1]
    float metalness;

    // Sheen extension arguments
    SheenArgs sheen;
};
`;
