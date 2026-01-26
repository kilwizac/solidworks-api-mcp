---
type: method
interface: IDisplayDimension
member: SetLineFontDimensionStyle
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting for the leader style, false uses the setting specified in Style
  -
    name: Style
    type: System.Int32
    description: Leader style as defined in swLineStyles_e ; valid only if UseDoc = false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.SetLineFontDimensionThickness
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - setlinefontdimensionstyle
  - idisplaydimension
  - display
  - line
  - font
  - style
  - use
  - doc
  - boolean
  - int32
---

# IDisplayDimension.SetLineFontDimensionStyle

Sets the style of leader for this display dimension.

## Signature

```csharp
System.Boolean SetLineFontDimensionStyle( 
   System.Boolean
UseDoc
,
   System.Int32
Style
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting for the leader style, false uses the setting specified in Style
- `Style` (System.Int32): Leader style as defined in swLineStyles_e ; valid only if UseDoc = false

## Return Value

True if the leader style is set, false if not

## Remarks

After calling this method, call
IModelView::GraphicsRedraw
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.SetLineFontDimensionThickness`