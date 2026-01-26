---
type: method
interface: IDisplayDimension
member: GetUseDocDual
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.Split
keywords:
  - dimension
  - see
  - also
  - idimension
  - dual
  - getusedocdual
  - idisplaydimension
  - display
  - use
  - doc
  - boolean
---

# IDisplayDimension.GetUseDocDual

Gets whether this display dimension uses the document setting for positioning dual dimensions.

## Signature

```csharp
System.Boolean GetUseDocDual()
```
## Parameters

None.

## Return Value

True if this display dimension uses its dual dimension's top, bottom, right, or left document setting, false if the display dimension uses a setting opposite of the dual dimension's top, bottom, right, or left document setting

## Remarks

Use
IDisplayDimension::SetDual
to set the dual dimension's top, bottom, right, or left setting for this display dimension.

## See Also

- `IDisplayDimension.Split`