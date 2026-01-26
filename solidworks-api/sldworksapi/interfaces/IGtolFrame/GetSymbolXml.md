---
type: method
interface: IGtolFrame
member: GetSymbolXml
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtolFrame.SetSymbolXml
  - ISldWorks.GetGtolFrameXMLSchema
keywords:
  - getsymbolxml
  - igtolframe
  - gtol
  - frame
  - symbol
  - xml
  - string
---

# IGtolFrame.GetSymbolXml

Gets the XML string for this Gtol frame.

## Signature

```csharp
System.String GetSymbolXml()
```
## Parameters

None.

## Return Value

XML string for this Gtol frame

## Remarks

This method is valid only for Gtols created in or converted to the SOLIDWORKS 2022 format.
See
Gtol Frame XML Schema
.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)

## See Also

- `IGtolFrame.SetSymbolXml`
- `ISldWorks.GetGtolFrameXMLSchema`