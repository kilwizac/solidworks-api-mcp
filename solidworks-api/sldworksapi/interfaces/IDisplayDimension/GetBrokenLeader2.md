---
type: method
interface: IDisplayDimension
member: GetBrokenLeader2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetUseDocBrokenLeader
  - IDisplayDimension.SetBrokenLeader2
  - IDisplayDimension.SolidLeader
keywords:
  - leaders
  - dimensions
  - getbrokenleader2
  - idisplaydimension
  - display
  - dimension
  - broken
  - leader2
  - int32
---

# IDisplayDimension.GetBrokenLeader2

Gets whether this display dimension has a broken or split leader.

## Signature

```csharp
System.Int32 GetBrokenLeader2()
```
## Parameters

None.

## Return Value

Broken leader value as defined in swDisplayDimensionLeaderText_e

## Remarks

Dimension text can be displayed above a solid leader line or the dimension leader line can be broken with the text displayed either horizontal or aligned with the leader line. You can use this method to determine which setting is used by this display dimension.
The setting can be local to the display dimension, or the display dimension might use the default document setting. This method returns a valid value only if it is using a local setting; if this display dimension uses the default document setting, it returns -1.
Use
IDisplayDimension::SetBrokenLeader2
to set this value.

## See Also

- `IDisplayDimension.GetUseDocBrokenLeader`
- `IDisplayDimension.SetBrokenLeader2`
- `IDisplayDimension.SolidLeader`