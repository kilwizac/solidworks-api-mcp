---
type: property
interface: IDisplayDimension
member: ExtensionLineUseDocumentDisplay
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.DisplayAsChain
  - IDisplayDimension.ExtensionLineExtendsFromCenterOfSet
  - IDisplayDimension.Jogged
  - IDisplayDimension.ResetExtensionLineStyle
  - IDisplayDimension.RunBidirectionally
  - IDisplayDimension.SetLineFontExtensionStyle
  - IDisplayDimension.SetLineFontExtensionThickness
keywords:
  - dimension
  - see
  - also
  - idimension
  - lines
  - extensionlineusedocumentdisplay
  - idisplaydimension
  - display
  - extension
  - line
  - use
  - document
  - boolean
  - insert
  - angular
  - running
  - vba
  - vb
  - net
readonly: null
---

# IDisplayDimension.ExtensionLineUseDocumentDisplay

Gets or sets whether to use the document settings for extension lines.

## Signature

```csharp
System.Boolean ExtensionLineUseDocumentDisplay {get; set;}
```
## Parameters

None.

## Return Value

True to use the document settings for extension lines, false to not

## Remarks

This property is valid only if
IDisplayDimension::ExtensionLineSameAsLeaderStyle
is set to false.

## Examples

- Insert Angular Running Dimension (VBA) (Set_Properties_of_Angular_Running_Dimension_Example_VB.htm)
- Insert Angular Running Dimension (VB.NET) (Set_Properties_of_Angular_Running_Dimension_Example_VBNET.htm)
- Insert Angular Running Dimension (C#) (Set_Properties_of_Angular_Running_Dimension_Example_CSharp.htm)

## See Also

- `IDisplayDimension.DisplayAsChain`
- `IDisplayDimension.ExtensionLineExtendsFromCenterOfSet`
- `IDisplayDimension.Jogged`
- `IDisplayDimension.ResetExtensionLineStyle`
- `IDisplayDimension.RunBidirectionally`
- `IDisplayDimension.SetLineFontExtensionStyle`
- `IDisplayDimension.SetLineFontExtensionThickness`