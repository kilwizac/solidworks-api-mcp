---
type: method
interface: IProjectionArrow
member: IGetCoordinates
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IProjectionArrow.GetCoordinates
keywords:
  - igetcoordinates
  - iprojectionarrow
  - projection
  - arrow
  - coordinates
  - double
---

# IProjectionArrow.IGetCoordinates

Gets the location of this projection arrow's line and its label.

## Signature

```csharp
System.Double IGetCoordinates()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 24 doubles containing starting and ending x,y,z points of the projection arrow and the x,y,z point of its label (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The doubles at indexes 0, 1, and 2 are the starting point of the projection arrow; the doubles at indexes 3, 4, and 5 are the ending point of the projection arrow. The doubles at indexes 21, 22, and 23 are the label location. All other doubles in the array are duplicates of these values.

## See Also

- `IProjectionArrow.GetCoordinates`