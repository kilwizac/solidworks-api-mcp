---
type: property
interface: IPageSetup
member: FooterTextFormat
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
  - IPageSetup.GetHeaderFooterString
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
  - footertextformat
  - ipagesetup
  - page
  - setup
  - footer
  - text
  - format
readonly: true
---

# IPageSetup.FooterTextFormat

Gets or sets the text format for the page footer.

## Signature

```csharp
TextFormat FooterTextFormat {get;}
```
## Parameters

None.

## Return Value

Text format for footer

## Remarks

The following line of code changes the font of the footer text to Arial:
PageSetup.FooterTextFormat.TypeFaceName = "Arial"

## See Also

- `IPageSetup.CenterFooter`
- `IPageSetup.CenterHeader`
- `IPageSetup.GetHeaderFooterString`
- `IPageSetup.HeaderTextFormat`
- `IPageSetup.LeftFooter`
- `IPageSetup.LeftHeader`
- `IPageSetup.RightFooter`
- `IPageSetup.RightHeader`
- `IPageSetup.SetFooter`
- `IPageSetup.SetHeader`