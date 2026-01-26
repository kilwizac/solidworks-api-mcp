---
type: method
interface: ISketch
member: GetEllipseCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetEllipses3
keywords:
  - ellipses
  - sketch
  - see
  - also
  - isketch
  - entities
  - getellipsecount
  - ellipse
  - count
  - int32
  - polylines
  - information
  - vba
---

# ISketch.GetEllipseCount

Gets the number of ellipses in the sketch.

## Signature

```csharp
System.Int32 GetEllipseCount()
```
## Parameters

None.

## Return Value

Number of ellipses in the sketch

## Remarks

Call this method before calling
ISketch::GetEllipses3
to determine the size of the array for that method.

## Examples

- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)

## See Also

- `ISketch.GetEllipses3`