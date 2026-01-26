---
type: method
interface: IDisplayDimension
member: ResetExtensionLineStyle
returns: System.Boolean
parameters:
  -
    name: ExtIndex
    type: System.Int16
    description: Index of extension line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.ExtensionLineExtendsFromCenterOfSet
  - IDisplayDimension.ExtensionLineSameAsLeaderStyle
  - IDisplayDimension.ExtensionLineUseDocumentDisplay
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - resetextensionlinestyle
  - idisplaydimension
  - display
  - reset
  - extension
  - line
  - style
  - ext
  - index
  - int16
  - boolean
---

# IDisplayDimension.ResetExtensionLineStyle

Resets the style of the specified extension line.

## Signature

```csharp
System.Boolean ResetExtensionLineStyle( 
   System.Int16
ExtIndex
)
```
## Parameters

- `ExtIndex` (System.Int16): Index of extension line

## Return Value

True if successful, false if not

## Remarks

Call this method to reset the extension line style if you previously called
IDisplayDimension::SetExtensionLineAsCenterline
to set the extension line as a centerline. This method corresponds to the extension line's shortcut menu item
Reset extension line style
, which appears after you select the extension line's shortcut menu item
Set extension line as centerline
.

## See Also

- `IDisplayDimension.ExtensionLineExtendsFromCenterOfSet`
- `IDisplayDimension.ExtensionLineSameAsLeaderStyle`
- `IDisplayDimension.ExtensionLineUseDocumentDisplay`