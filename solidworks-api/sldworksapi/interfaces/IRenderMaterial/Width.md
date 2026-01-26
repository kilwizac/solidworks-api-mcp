---
type: property
interface: IRenderMaterial
member: Width
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - width
  - irendermaterial
  - render
  - material
  - double
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

# IRenderMaterial.Width

Gets or sets the width for mapping this appearance texture.

## Signature

```csharp
System.Double Width {get; set;}
```
## Parameters

None.

## Return Value

Width

## Remarks

Call
IRenderMaterial::Height
to set the height of the appearance texture. If
IRenderMaterial::FixedAspectRatio
is true, then the image is uniformly scaled when either the width or height is changed.
To have the height and width of the appearance texture automatically stretch to fit a selected entity, call
IRenderMaterial::FitHeight
and
IRenderMaterial::FitWidth
.

## Examples

- Get Surface-finish Image Path and File Name (C#) (Get_Surface-finish_Image_Path_and_Filename_Example_CSharp.htm)
- Get Surface-finish Image Path and File Name (VB.NET) (Get_Surface-finish_Image_Path_and_Filename_Example_VBNET.htm)
- Get Surface-finish Image Path and File Name (VBA) (Get_Surface-finish_Image_Path_and_Filename_Example_VB.htm)