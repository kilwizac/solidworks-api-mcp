---
type: method
interface: IPageSetup
member: GetHeaderFooterString
returns: System.String
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: Type of string as defined in swStandardHeaderFooterPageSetupTexts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.CenterFooter
  - IPageSetup.CenterHeader
  - IPageSetup.FooterTextFormat
  - IPageSetup.HeaderTextFormat
  - IPageSetup.LeftFooter
  - IPageSetup.LeftHeader
  - IPageSetup.RightFooter
  - IPageSetup.RightHeader
  - IPageSetup.SetFooter
  - IPageSetup.SetHeader
keywords:
  - headers
  - footers
  - getheaderfooterstring
  - ipagesetup
  - page
  - setup
  - header
  - footer
  - string
  - which
  - one
  - int32
  - print
  - drawing
  - vb
  - net
  - vba
---

# IPageSetup.GetHeaderFooterString

Gets the specified standard string that can be used in headers and footers.

## Signature

```csharp
System.String GetHeaderFooterString( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): Type of string as defined in swStandardHeaderFooterPageSetupTexts_e

## Return Value

Standard header or footer text

## Examples

- Print Drawing (C#) (Print_Drawing_as_High_Quality_Example_CSharp.htm)
- Print Drawing (VB.NET) (Print_Drawing_as_High_Quality_Example_VBNET.htm)
- Print Drawing (VBA) (Print_Drawing_as_High_Quality_Example_VB.htm)

## See Also

- `IPageSetup.CenterFooter`
- `IPageSetup.CenterHeader`
- `IPageSetup.FooterTextFormat`
- `IPageSetup.HeaderTextFormat`
- `IPageSetup.LeftFooter`
- `IPageSetup.LeftHeader`
- `IPageSetup.RightFooter`
- `IPageSetup.RightHeader`
- `IPageSetup.SetFooter`
- `IPageSetup.SetHeader`