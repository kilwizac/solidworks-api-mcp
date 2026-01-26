---
type: method
interface: IDisplayDimension
member: GetUseDocBrokenLeader
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetBrokenLeader2
  - IDisplayDimension.SolidLeader
keywords:
  - leaders
  - dimensions
  - getusedocbrokenleader
  - idisplaydimension
  - display
  - dimension
  - use
  - doc
  - broken
  - leader
  - boolean
---

# IDisplayDimension.GetUseDocBrokenLeader

Gets whether this display dimension uses the document default setting for displaying leaders as broken.

## Signature

```csharp
System.Boolean GetUseDocBrokenLeader()
```
## Parameters

None.

## Return Value

True if this display dimension uses the document setting, false if it uses a specific setting

## Remarks

SOLIDWORKS can display dimension text above a solid, unbroken leader line, or the dimension leader line can be broken with the text displayed either horizontal or aligned with the leader line. This method allows you to determine if this
IDisplayDimension
is using the document default setting for this value or if the user has applied a
specific setting to this specific IDisplayDimension.
Use
IDisplayDimension::SetBrokenLeader2
to set this value.

## See Also

- `IDisplayDimension.GetBrokenLeader2`
- `IDisplayDimension.SolidLeader`