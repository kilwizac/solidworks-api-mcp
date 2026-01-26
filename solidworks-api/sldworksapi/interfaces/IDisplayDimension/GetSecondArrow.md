---
type: method
interface: IDisplayDimension
member: GetSecondArrow
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ArrowSide
  - IDisplayDimension.GetUseDocSecondArrow
  - IDisplayDimension.SetSecondArrow
keywords:
  - arrows
  - dimensions
  - second
  - outside
  - arrow
  - display
  - getsecondarrow
  - idisplaydimension
  - dimension
  - boolean
---

# IDisplayDimension.GetSecondArrow

Gets whether this diameter display dimension has the second arrow enabled.

## Signature

```csharp
System.Boolean GetSecondArrow()
```
## Parameters

None.

## Return Value

True if the second arrow is displayed, false if the second arrow is not displayed (see Remarks )

## Remarks

For diameter dimensions, the second outside arrow is the arrow that appears on the opposite side of the arc from the dimension text. This occurs only when the text is outside of the arc.
Display of this arrow is optional, and is controlled by a value stored in one of two places: on the owning document or on the individual display dimension. Use
IDisplayDimension::GetUseDocSecondArrow
to determine whether the document or the individual display dimension is controlling the second arrow display.
The return value from this method is not valid when the document is controlling the display of second arrows.
This method applies only to diameter dimensions. If this method is executed on any other type of dimension, SOLIDWORKS returns false.
Use
IDisplayDimension::SetSecondArrow
to set the second arrow values.

## See Also

- `IDisplayDimension.ArrowSide`
- `IDisplayDimension.GetUseDocSecondArrow`
- `IDisplayDimension.SetSecondArrow`