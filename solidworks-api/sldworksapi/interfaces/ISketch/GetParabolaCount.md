---
type: method
interface: ISketch
member: GetParabolaCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetParabolas2
  - ISketchParabola
keywords:
  - sketch
  - entities
  - parabolas
  - see
  - also
  - isketch
  - getparabolacount
  - parabola
  - count
  - int32
  - vba
  - polylines
  - information
---

# ISketch.GetParabolaCount

Gets the number of parabolas in the sketch.

## Signature

```csharp
System.Int32 GetParabolaCount()
```
## Parameters

None.

## Return Value

Number of parabolas in the sketch

## Remarks

Call this method before calling
ISketch::IGetParabolas2
to determine the size of the array for that method.

## Examples

- Get Parabolas in Sketch (VBA) (Get_Parabolas_in_Sketch_Example_VB.htm)
- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)

## See Also

- `ISketch.GetParabolas2`
- `ISketchParabola`