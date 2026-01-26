---
type: method
interface: IProjectionArrow
member: GetCoordinates
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IProjectionArrow.IGetCoordinates
keywords:
  - getcoordinates
  - iprojectionarrow
  - projection
  - arrow
  - coordinates
  - object
  - projected
  - view
  - vb
  - net
  - vba
---

# IProjectionArrow.GetCoordinates

Gets the location of this projection arrow's line and its label.

## Signature

```csharp
System.Object GetCoordinates()
```
## Parameters

None.

## Return Value

Array of 24 doubles containing starting and ending x,y,z points of the projection arrow and the x,y,z point for its label (see Remarks )

## Remarks

The doubles at indexes 0, 1, and 2 are the starting point of the projection arrow; the doubles at indexes 3, 4, and 5 are the ending point of the projection arrow. The doubles at indexes 21, 22, and 23 are the label location. All other doubles in the array are duplicates of these values.

## Examples

- Get Arrow in Projected View (C#) (Get_Arrow_in_Projected_View_Example_CSharp.htm)
- Get Arrow in Projected View (VB.NET) (Get_Arrow_in_Projected_View_Example_VBNET.htm)
- Get Arrow in Projected View (VBA) (Get_Arrow_in_Projected_View_Example_VB.htm)

## See Also

- `IProjectionArrow.IGetCoordinates`