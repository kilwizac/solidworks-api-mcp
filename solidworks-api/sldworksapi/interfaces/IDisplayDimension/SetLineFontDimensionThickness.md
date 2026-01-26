---
type: method
interface: IDisplayDimension
member: SetLineFontDimensionThickness
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting for the thickness of leaders, false uses the setting specified in Style
  -
    name: Style
    type: System.Int32
    description: Leader thickness as defined in swLineWeights_e ; valid only if UseDoc = false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.SetLineFontDimensionStyle
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - setlinefontdimensionthickness
  - idisplaydimension
  - display
  - line
  - font
  - thickness
  - use
  - doc
  - boolean
  - style
  - int32
---

# IDisplayDimension.SetLineFontDimensionThickness

Sets the thickness of leaders of this display dimension.

## Signature

```csharp
System.Boolean SetLineFontDimensionThickness( 
   System.Boolean
UseDoc
,
   System.Int32
Style
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting for the thickness of leaders, false uses the setting specified in Style
- `Style` (System.Int32): Leader thickness as defined in swLineWeights_e ; valid only if UseDoc = false

## Return Value

True if the leader thickness is set, false if not

## Remarks

After calling this method, call
IModelView::GraphicsRedraw
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.SetLineFontDimensionStyle`