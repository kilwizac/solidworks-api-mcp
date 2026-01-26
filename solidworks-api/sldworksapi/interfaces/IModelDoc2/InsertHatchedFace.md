---
type: method
interface: IModelDoc2
member: InsertHatchedFace
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - ui
related:
  - IFaceHatch
  - ISketchManager.CreateBoundaryHatch
  - ISketchManager.CreateRegionHatch
  - IView.GetFaceHatchCount
  - IView.GetFaceHatches
  - IView.IGetFaceHatches
  - IView.ScaleHatchPattern
keywords:
  - crosshatch
  - see
  - also
  - ifacehatch
  - faces
  - drawings
  - face
  - iface2
  - cross
  - hatch
  - hatching
  - view
  - iview
  - hatches
  - inserthatchedface
  - imodeldoc2
  - model
  - doc2
  - insert
  - hatched
  - void
  - vba
  - area
  - data
  - vb
  - net
---

# IModelDoc2.InsertHatchedFace

Hatches the selected faces or closed sketch segments in a drawing.

## Signature

```csharp
void InsertHatchedFace()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method supports hatching of drawings only; it does not support hatching of parts or assemblies.

## Examples

- Insert Hatch (VBA) (Insert_Hatch_Example_VB.htm)
- Get Area Hatch Data (VBA) (Get_Area_Hatch_Data_Example_VB.htm)
- Get Area Hatch Data (VB.NET) (Get_Area_Hatch_Data_Example_VBNET.htm)
- Get Area Hatch Data (C#) (Get_Area_Hatch_Data_Example_CSharp.htm)

## See Also

- `IFaceHatch`
- `ISketchManager.CreateBoundaryHatch`
- `ISketchManager.CreateRegionHatch`
- `IView.GetFaceHatchCount`
- `IView.GetFaceHatches`
- `IView.IGetFaceHatches`
- `IView.ScaleHatchPattern`