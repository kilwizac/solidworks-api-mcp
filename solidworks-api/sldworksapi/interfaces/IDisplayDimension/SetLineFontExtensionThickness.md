---
type: method
interface: IDisplayDimension
member: SetLineFontExtensionThickness
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True uses the document setting for the thickness of extension lines, false uses the setting specified in Style
  -
    name: Style
    type: System.Int32
    description: Extension line font thickness as defined in swLineWeights_e ; valid only if UseDoc = false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ExtensionLineExtendsFromCenterOfSet
  - IDisplayDimension.ExtensionLineSameAsLeaderStyle
  - IDisplayDimension.ExtensionLineUseDocumentDisplay
  - IDisplayDimension.SetLineFontExtensionStyle
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - setlinefontextensionthickness
  - idisplaydimension
  - display
  - line
  - font
  - extension
  - thickness
  - use
  - doc
  - boolean
  - style
  - int32
---

# IDisplayDimension.SetLineFontExtensionThickness

Sets the thickness of the extension lines of this display dimension.

## Signature

```csharp
System.Boolean SetLineFontExtensionThickness( 
   System.Boolean
UseDoc
,
   System.Int32
Style
)
```
## Parameters

- `UseDoc` (System.Boolean): True uses the document setting for the thickness of extension lines, false uses the setting specified in Style
- `Style` (System.Int32): Extension line font thickness as defined in swLineWeights_e ; valid only if UseDoc = false

## Return Value

True if the extension line font thickness is set, false if not

## Remarks

After calling this method, call
IModelView::GraphicsRedraw
to redraw the graphics window to see your changes.

## See Also

- `IDisplayDimension.ExtensionLineExtendsFromCenterOfSet`
- `IDisplayDimension.ExtensionLineSameAsLeaderStyle`
- `IDisplayDimension.ExtensionLineUseDocumentDisplay`
- `IDisplayDimension.SetLineFontExtensionStyle`