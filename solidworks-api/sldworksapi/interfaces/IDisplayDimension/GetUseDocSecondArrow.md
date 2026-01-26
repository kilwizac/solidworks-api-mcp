---
type: method
interface: IDisplayDimension
member: GetUseDocSecondArrow
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ArrowSide
  - IDisplayDimension.GetSecondArrow
keywords:
  - arrows
  - dimensions
  - second
  - outside
  - arrow
  - display
  - getusedocsecondarrow
  - idisplaydimension
  - dimension
  - use
  - doc
  - boolean
---

# IDisplayDimension.GetUseDocSecondArrow

Gets whether this diameter display dimension uses the document default setting for the display of the second outside arrow.

## Signature

```csharp
System.Boolean GetUseDocSecondArrow()
```
## Parameters

None.

## Return Value

True if this display dimension uses the document setting, false if it uses the local setting

## Remarks

For diameter dimensions, the second outside arrow is the arrow that appears on the opposite side of the arc from the dimension text. This occurs only when the text is outside of the arc.
This method determines whether this display dimension uses the default document setting for second arrow display.
This method applies only to diameter dimensions. If you execute this method for any other types of dimensions, SOLIDWORKS returns false.
Use
IDisplayDimension::SetSecondArrow
to set this value.

## See Also

- `IDisplayDimension.ArrowSide`
- `IDisplayDimension.GetSecondArrow`