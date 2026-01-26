---
type: method
interface: IDisplayDimension
member: GetUseDocBentLeaderLength
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.SetBentLeaderLength
keywords:
  - leaders
  - dimensions
  - getusedocbentleaderlength
  - idisplaydimension
  - display
  - dimension
  - use
  - doc
  - bent
  - leader
  - length
  - boolean
---

# IDisplayDimension.GetUseDocBentLeaderLength

Gets whether this dimension is using the document default for bent leader length or not.

## Signature

```csharp
System.Boolean GetUseDocBentLeaderLength()
```
## Parameters

None.

## Return Value

True if using the document default setting for dimension bent leader length, false if not

## Remarks

This method returns whether the document default setting is being used or not, regardless of how the dimension is currently being displayed.
Even if the dimension is not currently being displayed with a bent leader, this method returns the value.
Use
IDisplayDimension::GetBentLeaderLength
to determine the bent leader length for this dimension.

## See Also

- `IDisplayDimension.SetBentLeaderLength`