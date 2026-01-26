---
type: property
interface: IPageSetup
member: HeaderTextFormat
returns: TextFormat
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.CenterFooter
  - IPageSetup.CenterHeader
  - IPageSetup.FooterTextFormat
  - IPageSetup.GetHeaderFooterString
  - IPageSetup.LeftFooter
  - IPageSetup.LeftHeader
  - IPageSetup.RightFooter
  - IPageSetup.RightHeader
  - IPageSetup.SetFooter
  - IPageSetup.SetHeader
keywords:
  - headers
  - footers
  - headertextformat
  - ipagesetup
  - page
  - setup
  - header
  - text
  - format
readonly: true
---

# IPageSetup.HeaderTextFormat

Gets or sets the text format for the page header.

## Signature

```csharp
TextFormat HeaderTextFormat {get;}
```
## Parameters

None.

## Return Value

Text format for header

## Remarks

The following line of code to change the font of the header text to Arial:
PageSetup.HeaderTextFormat.TypeFaceName = "Arial"

## See Also

- `IPageSetup.CenterFooter`
- `IPageSetup.CenterHeader`
- `IPageSetup.FooterTextFormat`
- `IPageSetup.GetHeaderFooterString`
- `IPageSetup.LeftFooter`
- `IPageSetup.LeftHeader`
- `IPageSetup.RightFooter`
- `IPageSetup.RightHeader`
- `IPageSetup.SetFooter`
- `IPageSetup.SetHeader`