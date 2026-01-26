---
type: method
interface: ISketch
member: GetUserPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
  - ui
related:
  - ISketch.GetUserPoints2
  - ISketch.IGetUserPoints2
keywords:
  - sketch
  - see
  - also
  - isketch
  - points
  - getuserpointscount
  - user
  - count
  - int32
  - polylines
  - information
  - vba
---

# ISketch.GetUserPointsCount

Gets the number of user points in the sketch.

## Signature

```csharp
System.Int32 GetUserPointsCount()
```
## Parameters

None.

## Return Value

Number of user points in the sketch

## Remarks

Call this method before calling
ISketch::IGetUserPoints2
to get the size of the array for that method.

## Examples

- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)

## See Also

- `ISketch.GetUserPoints2`
- `ISketch.IGetUserPoints2`