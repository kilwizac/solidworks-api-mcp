---
type: method
interface: ISketch
member: GetSketchRegionCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetSketchRegions
keywords:
  - sketch
  - see
  - also
  - isketch
  - region
  - getsketchregioncount
  - count
  - int32
  - regions
  - vba
  - vb
  - net
---

# ISketch.GetSketchRegionCount

Gets the number of sketch regions in this sketch.

## Signature

```csharp
System.Int32 GetSketchRegionCount()
```
## Parameters

None.

## Return Value

Number of sketch regions

## Remarks

Call this method before calling
ISketch::IGetSketchRegions
to get the size of the array for that method.

## Examples

- Get Sketch Regions (VBA) (Get_Sketch_Regions_Example_VB.htm)
- Get Sketch Regions (VB.NET) (Get_Sketch_Regions_Example_VBNET.htm)
- Get Sketch Regions (C#) (Get_Sketch_Regions_Example_CSharp.htm)

## See Also

- `ISketch.GetSketchRegions`