---
type: method
interface: ISketch
member: GetArcCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetArcs2
  - ISketchArc
keywords:
  - sketch
  - see
  - also
  - isketch
  - arcs
  - entities
  - getarccount
  - arc
  - count
  - int32
  - vba
  - polylines
  - information
---

# ISketch.GetArcCount

Gets the number of arcs in the sketch.

## Signature

```csharp
System.Int32 GetArcCount()
```
## Parameters

None.

## Return Value

Number of arcs in the sketch

## Remarks

Call this method before
ISketch::IGetArcs2
to determine the size of the array for that method.

## Examples

- Get Arcs in Sketch (VBA) (Get_Arcs_in_Sketch_Example_VB.htm)
- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)

## See Also

- `ISketch.GetArcs2`
- `ISketchArc`