---
type: method
interface: IDisplayDimension
member: SetLineFontExtensionStyle
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting for the font style of extension lines, false uses the setting specified in Style
  -
    name: Style
    type: System.Int32
    description: Extension line font style as defined in swLineStyles_e ; valid only if UseDoc = false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ExtensionLineExtendsFromCenterOfSet
  - IDisplayDimension.ExtensionLineSameAsLeaderStyle
  - IDisplayDimension.ExtensionLineUseDocumentDisplay
  - IDisplayDimension.SetLineFontExtensionThickness
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - setlinefontextensionstyle
  - idisplaydimension
  - display
  - line
  - font
  - extension
  - style
  - use
  - doc
  - boolean
  - int32
---

# IDisplayDimension.SetLineFontExtensionStyle

Sets the line font style for the extension lines of this display dimension.

## Signature

```csharp
System.Boolean SetLineFontExtensionStyle( 
   System.Boolean
UseDoc
,
   System.Int32
Style
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting for the font style of extension lines, false uses the setting specified in Style
- `Style` (System.Int32): Extension line font style as defined in swLineStyles_e ; valid only if UseDoc = false

## Return Value

True if the extension line font style is set, false if not

## Remarks

After calling this method, call
IModelView::GraphicsRedraw
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.ExtensionLineExtendsFromCenterOfSet`
- `IDisplayDimension.ExtensionLineSameAsLeaderStyle`
- `IDisplayDimension.ExtensionLineUseDocumentDisplay`
- `IDisplayDimension.SetLineFontExtensionThickness`