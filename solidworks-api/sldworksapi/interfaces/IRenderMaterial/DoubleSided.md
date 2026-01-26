---
type: property
interface: IRenderMaterial
member: DoubleSided
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - doublesided
  - irendermaterial
  - render
  - material
  - double
  - sided
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

# IRenderMaterial.DoubleSided

Gets or sets whether to enable shading from both sides of a surface when rendering a model using a ray-trace rendering engine.

## Signature

```csharp
System.Boolean DoubleSided {get; set;}
```
## Parameters

None.

## Return Value

True to enable shading from both sides, false to not

## Remarks

This method is only available when a ray-trace rendering engine is loaded.
NOTES:
When this property is disabled, surfaces that do not face the camera seem invisible.
Double-sided surfaces can cause rendering errors. Use sparingly.

## Examples

- Get Surface-finish Image Path and File Name (C#) (Get_Surface-finish_Image_Path_and_Filename_Example_CSharp.htm)
- Get Surface-finish Image Path and File Name (VB.NET) (Get_Surface-finish_Image_Path_and_Filename_Example_VBNET.htm)
- Get Surface-finish Image Path and File Name (VBA) (Get_Surface-finish_Image_Path_and_Filename_Example_VB.htm)