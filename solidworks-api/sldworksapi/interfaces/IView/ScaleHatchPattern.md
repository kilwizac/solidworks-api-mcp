---
type: property
interface: IView
member: ScaleHatchPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IModelDoc2.InsertHatchedFace
  - IView.GetFaceHatchCount
  - IView.GetFaceHatches
keywords:
  - hatching
  - view
  - see
  - also
  - iview
  - face
  - hatches
  - drawing
  - views
  - scalehatchpattern
  - scale
  - hatch
  - pattern
  - boolean
  - area
  - data
  - vb
  - net
  - vba
readonly: null
---

# IView.ScaleHatchPattern

Gets or sets whether to scale the hatch pattern to the drawing view.

## Signature

```csharp
System.Boolean ScaleHatchPattern {get; set;}
```
## Parameters

None.

## Return Value

True to scale the hatch pattern to the drawing view, false to not

## Examples

- Get Area Hatch Data (C#) (Get_Area_Hatch_Data_Example_CSharp.htm)
- Get Area Hatch Data (VB.NET) (Get_Area_Hatch_Data_Example_VBNET.htm)
- Get Area Hatch Data (VBA) (Get_Area_Hatch_Data_Example_VB.htm)

## See Also

- `IModelDoc2.InsertHatchedFace`
- `IView.GetFaceHatchCount`
- `IView.GetFaceHatches`