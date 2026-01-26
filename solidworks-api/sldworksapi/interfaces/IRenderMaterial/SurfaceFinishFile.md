---
type: property
interface: IRenderMaterial
member: SurfaceFinishFile
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related: []
keywords:
  - surfacefinishfile
  - irendermaterial
  - render
  - material
  - surface
  - finish
  - file
  - string
readonly: null
---

# IRenderMaterial.SurfaceFinishFile

Gets or sets the path and file name of the pattern based on an image file for the surface finish of this appearance.

## Signature

```csharp
System.String SurfaceFinishFile {get; set;}
```
## Parameters

None.

## Return Value

Path to an image file for the surface finish

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_FromFile.