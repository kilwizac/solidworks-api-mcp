---
type: property
interface: IRenderMaterial
member: FixedAspectRatio
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - fixedaspectratio
  - irendermaterial
  - render
  - material
  - fixed
  - aspect
  - ratio
  - boolean
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

# IRenderMaterial.FixedAspectRatio

Gets or sets whether the aspect ratio is fixed for mapping this appearance texture.

## Signature

```csharp
System.Boolean FixedAspectRatio {get; set;}
```
## Parameters

None.

## Return Value

True if the aspect ratio is fixed, false if not

## Remarks

When FixedAspect is true, then the image is uniformly scaled when either the
height
or
width
is changed.
Use this property when changing the height or width of an appearance texture and wanting it uniformly scaled.

## Examples

- Get Surface-finish Image Path and File Name (C#) (Get_Surface-finish_Image_Path_and_Filename_Example_CSharp.htm)
- Get Surface-finish Image Path and File Name (VB.NET) (Get_Surface-finish_Image_Path_and_Filename_Example_VBNET.htm)
- Get Surface-finish Image Path and File Name (VBA) (Get_Surface-finish_Image_Path_and_Filename_Example_VB.htm)