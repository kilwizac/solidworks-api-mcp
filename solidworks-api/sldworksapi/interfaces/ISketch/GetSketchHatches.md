---
type: method
interface: ISketch
member: GetSketchHatches
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.IEnumSketchHatches
keywords:
  - sketch
  - entities
  - hatches
  - see
  - also
  - isketch
  - hatching
  - getsketchhatches
  - object
  - area
  - hatch
  - vba
  - data
  - insert
---

# ISketch.GetSketchHatches

Gets an array of sketch hatches that exist in this sketch.

## Signature

```csharp
System.Object GetSketchHatches()
```
## Parameters

None.

## Return Value

Array of sketch hatches

## Remarks

For information about hatches:
in drawing views, use
IView::GetFaceHatchCount
,
IView::GetFaceHatches
, and
IView::IGetFaceHatches
.
detail, broken, or crop views, use
IView::GetSolidHatchCount
,
IView::GetSolidHatchInfo
, and
IView::IGetSolidHatchInfo

## Examples

- Get Area Hatch (VBA) (Get_Area_Hatch_Data_Example_VB.htm)
- Get Hatching Data (VBA) (Get_Hatching_Data_Example_VB.htm)
- Insert Hatch (VBA) (Insert_Hatch_Example_VB.htm)

## See Also

- `ISketch.IEnumSketchHatches`