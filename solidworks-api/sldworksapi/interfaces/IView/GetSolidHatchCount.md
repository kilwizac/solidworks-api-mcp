---
type: method
interface: IView
member: GetSolidHatchCount
returns: System.Int32
parameters:
  -
    name: ArraySize
    type: System.Int32
    description: Number of solid-fill hatches
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - ISketch.GetSketchHatches
  - IView.GetSolidHatchInfo
  - IView.IGetSolidHatchInfo
keywords:
  - hatching
  - view
  - see
  - also
  - iview
  - solid
  - fill
  - hatches
  - detail
  - views
  - break
  - crop
  - getsolidhatchcount
  - hatch
  - count
  - array
  - size
  - int32
  - information
  - vb
  - net
  - vba
---

# IView.GetSolidHatchCount

Gets the number of visible solid-fill hatches in a detail, break, or crop view and the size of the array for their boundary data.

## Signature

```csharp
System.Int32 GetSolidHatchCount( 
   out System.Int32
ArraySize
)
```
## Parameters

- `ArraySize` (System.Int32): Number of solid-fill hatches

## Return Value

Size of the array for the solid-fill hatches boundary data

## Remarks

To get information about solid-fill hatches in drawing views, use
IView::GetFaceHatchCount
,
IView::GetFaceHatches
, and
IView::IGetFaceHatches
.

## Examples

- Get Solid-fill Hatch Information (VB.NET) (Get_Solid-fill_Hatch_Information_Example_VBNET.htm)
- Get Solid-fill Hatch Information (VBA) (Get_Solid-fill_Hatch_Information_Example_VB6.htm)
- Get Solid-fill Hatch Information (C#) (Get_Solid-fill_Hatch_Information_Example_CSharp.htm)

## See Also

- `ISketch.GetSketchHatches`
- `IView.GetSolidHatchInfo`
- `IView.IGetSolidHatchInfo`