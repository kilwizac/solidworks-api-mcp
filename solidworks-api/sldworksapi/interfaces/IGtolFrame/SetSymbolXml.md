---
type: method
interface: IGtolFrame
member: SetSymbolXml
returns: System.Boolean
parameters:
  -
    name: Xmlstring
    type: System.String
    description: XML string
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtolFrame.GetSymbolXml
  - ISldWorks.GetGtolFrameXMLSchema
keywords:
  - setsymbolxml
  - igtolframe
  - gtol
  - frame
  - symbol
  - xml
  - xmlstring
  - string
  - boolean
---

# IGtolFrame.SetSymbolXml

Sets the XML string for this Gtol frame.

## Signature

```csharp
System.Boolean SetSymbolXml( 
   System.String
Xmlstring
)
```
## Parameters

- `Xmlstring` (System.String): XML string

## Return Value

True if XML string successfully set, false if not

## Remarks

This method is valid only for Gtols created in or converted to the SOLIDWORKS 2022 format.
See
Gtol Frame XML Schema
.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)

## See Also

- `IGtolFrame.GetSymbolXml`
- `ISldWorks.GetGtolFrameXMLSchema`