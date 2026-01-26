---
type: method
interface: IDisplayDimension
member: GetSupportsGenericText
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getsupportsgenerictext
  - idisplaydimension
  - display
  - dimension
  - supports
  - generic
  - text
  - boolean
  - solidworks
  - version
  - vb
  - net
  - vba
---

# IDisplayDimension.GetSupportsGenericText

Gets whether the display dimension was created in SOLIDWORKS 2011 or later, which, if so, indicates that the display dimension is generic text.

## Signature

```csharp
System.Boolean GetSupportsGenericText()
```
## Parameters

None.

## Return Value

True if the display dimension was created in SOLIDWORKS 2011 or later and is generic text, false if the display dimension was created in an earlier release of SOLIDWORKS and is dimension text

## Examples

- Get SOLIDWORKS Version of Display Dimension (C#) (Get_SOLIDWORKS_Version_of_Display_Dimension_Example_CSharp.htm)
- Get SOLIDWORKS Version of Display Dimension (VB.NET) (Get_SOLIDWORKS_Version_of_Display_Dimension_Example_VBNET.htm)
- Get SOLIDWORKS Version of Display Dimension (VBA) (Get_SOLIDWORKS_Version_of_Display_Dimension_Example_VB.htm)