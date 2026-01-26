---
type: method
interface: IDisplayDimension
member: GetBentLeaderLength
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetUseDocBentLeaderLength
  - IDisplayDimension.SetBentLeaderLength
keywords:
  - leaders
  - dimensions
  - getbentleaderlength
  - idisplaydimension
  - display
  - dimension
  - bent
  - leader
  - length
  - double
---

# IDisplayDimension.GetBentLeaderLength

Gets the length of the bent leader to use when displaying this dimension.

## Signature

```csharp
System.Double GetBentLeaderLength()
```
## Parameters

None.

## Return Value

Length of the bent leader in system units

## Remarks

This method returns the length of the bent leader regardless of how the dimension is currently being displayed.  Even if the dimension is not currently being displayed with a bent leader, this method still returns the length.
If the dimension is using the document default setting for dimension bent leader length, this method returns that value. You can use
IDisplayDimension::GetUseDocBentLeaderLength
to determine if this dimension is using the document default setting for dimension
bent leader length or not.

## See Also

- `IDisplayDimension.GetUseDocBentLeaderLength`
- `IDisplayDimension.SetBentLeaderLength`