---
type: method
interface: IDisplayDimension
member: GetUseDocArrowHeadStyle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetArrowHeadStyle2
keywords:
  - arrows
  - dimensions
  - getusedocarrowheadstyle
  - idisplaydimension
  - display
  - dimension
  - use
  - doc
  - arrow
  - head
  - style
  - boolean
---

# IDisplayDimension.GetUseDocArrowHeadStyle

Gets whether this display dimension uses the document default setting for dimension arrowhead style.

## Signature

```csharp
System.Boolean GetUseDocArrowHeadStyle()
```
## Parameters

None.

## Return Value

True if this display dimension uses the document setting, false if it uses the local display dimension setting

## Remarks

The arrowhead style for a display dimension is controlled by a value stored in one of two places: on the owning document or on the individual display dimension. This method gets the setting that indicates which setting is currently in use.
Use
IDisplayDimension::SetArrowHeadStyle2
to set this value.

## See Also

- `IDisplayDimension.GetArrowHeadStyle2`