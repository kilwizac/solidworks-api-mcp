---
type: method
interface: IDetailCircle
member: IGetProfileItems
returns: SketchSegment
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch segments that make up this detail circle profile
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetProfileItems
keywords:
  - igetprofileitems
  - idetailcircle
  - detail
  - circle
  - profile
  - items
  - count
  - int32
  - sketch
  - segment
---

# IDetailCircle.IGetProfileItems

Gets the sketch segments that make up this detail circle profile.

## Signature

```csharp
SketchSegment IGetProfileItems( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch segments that make up this detail circle profile

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch segments that make up this detail circle profile VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IDetailCircle::GetProfileItemsCount
before calling this method to determine the size of the array.
Do not modify the sketch segments returned by this method. This method only provides information about the profile geometry of the detail circle. To modify a detail circle, use
IDetailCircle::SetParameters
.

## See Also

- `IDetailCircle.GetProfileItems`