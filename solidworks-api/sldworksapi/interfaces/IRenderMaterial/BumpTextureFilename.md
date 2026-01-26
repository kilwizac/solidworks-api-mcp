---
type: property
interface: IRenderMaterial
member: BumpTextureFilename
returns: System.String
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - file-io
  - ui
related: []
keywords:
  - bumptexturefilename
  - irendermaterial
  - render
  - material
  - bump
  - texture
  - filename
  - string
  - surface
  - finish
  - image
  - path
  - file
  - name
  - vb
  - net
  - vba
readonly: null
---

# IRenderMaterial.BumpTextureFilename

Obsolete. Superseded by IRenderMaterial::SurfaceFinishFile. Gets or sets the path and file name of the pattern based on an image file for the surface finish of this appearance.

## Signature

```csharp
System.String BumpTextureFilename {get; set;}
```
## Parameters

None.

## Return Value

Path and file name of the pattern based on an image file for the surface finish

## Remarks

This property corresponds to selecting
From File
as the surface finish type on the Surface Finish tab of the Appearances PropertyManager page and browsing to an image.

## Examples

- Get Surface-finish Image Path and File Name (C#) (Get_Surface-finish_Image_Path_and_Filename_Example_CSharp.htm)
- Get Surface-finish Image Path and File Name (VB.NET) (Get_Surface-finish_Image_Path_and_Filename_Example_VBNET.htm)
- Get Surface-finish Image Path and File Name (VBA) (Get_Surface-finish_Image_Path_and_Filename_Example_VB.htm)