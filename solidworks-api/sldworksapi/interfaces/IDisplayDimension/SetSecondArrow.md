---
type: method
interface: IDisplayDimension
member: SetSecondArrow
returns: void
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting for second arrows, false uses the setting specified by the SecondArrow argument
  -
    name: SecondArrow
    type: System.Boolean
    description: Enables or disables the display of the second arrow on this display dimension if UseDoc is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ArrowSide
keywords:
  - arrows
  - second
  - outside
  - arrow
  - display
  - dimensions
  - setsecondarrow
  - idisplaydimension
  - dimension
  - use
  - doc
  - boolean
  - void
---

# IDisplayDimension.SetSecondArrow

Sets the second arrow characteristics of this diameter display dimension.

## Signature

```csharp
void SetSecondArrow( 
   System.Boolean
UseDoc
,
   System.Boolean
SecondArrow
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting for second arrows, false uses the setting specified by the SecondArrow argument
- `SecondArrow` (System.Boolean): Enables or disables the display of the second arrow on this display dimension if UseDoc is false

## Return Value

Unknown.

## Remarks

For diameter dimensions, the second outside arrow is the arrow that appears on the opposite side of the arc from the dimension text. This occurs only when the text is outside of the arc.
Display of this arrow is optional, and is controlled by a value stored in one of two places: on the owning document or on the individual display dimension. This method allows you to determine which setting to use: the document default or the value specified in the secondArrow argument.
The UseDoc argument indicates whether to use the document default setting for second arrows. If it is false, then the SecondArrow argument indicates whether or not the second arrow is enabled.
Use
IDisplayDimension::GetUseDocSecondArrow
and
IDisplayDimension::GetSecondArrow
to get the current values for these settings.
This method applies to only diameter dimensions. If you execute this method with any other types of dimensions, SOLIDWORKS returns false.
After using this method, use
IModelDoc2::GraphicsRedraw2
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.ArrowSide`