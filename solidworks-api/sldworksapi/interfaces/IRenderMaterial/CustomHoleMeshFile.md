---
type: property
interface: IRenderMaterial
member: CustomHoleMeshFile
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
  - customholemeshfile
  - irendermaterial
  - render
  - material
  - custom
  - hole
  - mesh
  - file
  - string
readonly: null
---

# IRenderMaterial.CustomHoleMeshFile

Gets or sets the custom hole mesh file.

## Signature

```csharp
System.String CustomHoleMeshFile {get; set;}
```
## Parameters

None.

## Return Value

Path to custom hole mesh file

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_CustomHoleMesh.