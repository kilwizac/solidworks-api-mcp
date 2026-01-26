---
type: property
interface: IRenderMaterial
member: RoundSharpEdges
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - ui
related: []
keywords:
  - roundsharpedges
  - irendermaterial
  - render
  - material
  - round
  - sharp
  - edges
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

# IRenderMaterial.RoundSharpEdges

Gets or sets the value by which to round sharp edges when rendering a model using a ray-trace rendering engine.

## Signature

```csharp
System.Double RoundSharpEdges {get; set;}
```
## Parameters

None.

## Return Value

Value by which to round sharp edges

## Remarks

This method:
is only available when a ray-trace rendering engine is loaded.
does not change model geometry.

## Examples

- Get Surface-finish Image Path and File Name (C#) (Get_Surface-finish_Image_Path_and_Filename_Example_CSharp.htm)
- Get Surface-finish Image Path and File Name (VB.NET) (Get_Surface-finish_Image_Path_and_Filename_Example_VBNET.htm)
- Get Surface-finish Image Path and File Name (VBA) (Get_Surface-finish_Image_Path_and_Filename_Example_VB.htm)