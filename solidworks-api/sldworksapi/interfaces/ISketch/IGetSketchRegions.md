---
type: method
interface: ISketch
member: IGetSketchRegions
returns: SketchRegion
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch regions
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
  - isketchregion
  - entities
  - regions
  - sketchregion
  - igetsketchregions
  - count
  - int32
---

# ISketch.IGetSketchRegions

Gets the sketch regions in this sketch.

## Signature

```csharp
SketchRegion IGetSketchRegions( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch regions

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch regions VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketch::GetSketchRegionCount
to get Count.

## See Also

- `ISketch.GetSketchRegions`