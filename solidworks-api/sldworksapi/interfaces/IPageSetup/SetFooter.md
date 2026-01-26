---
type: method
interface: IPageSetup
member: SetFooter
returns: System.Boolean
parameters:
  -
    name: Left
    type: System.String
    description: Left-footer text
  -
    name: Center
    type: System.String
    description: Center-footer text
  -
    name: Right
    type: System.String
    description: Right-footer text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.CenterHeader
  - IPageSetup.FooterTextFormat
  - IPageSetup.GetHeaderFooterString
  - IPageSetup.HeaderTextFormat
  - IPageSetup.LeftHeader
  - IPageSetup.RightHeader
  - IPageSetup.SetHeader
keywords:
  - headers
  - footers
  - setfooter
  - ipagesetup
  - page
  - setup
  - footer
  - left
  - string
  - center
  - right
  - boolean
---

# IPageSetup.SetFooter

Sets the entire page footer.

## Signature

```csharp
System.Boolean SetFooter( 
   System.String
Left
,
   System.String
Center
,
   System.String
Right
)
```
## Parameters

- `Left` (System.String): Left-footer text
- `Center` (System.String): Center-footer text
- `Right` (System.String): Right-footer text

## Return Value

True if the footer is successfully changed, false if not

## Remarks

This method is equivalent to setting
IPageSetup::LeftFooter
,
IPageSetup::CenterFooter
, and
IPageSetup::RightFooter
.

## See Also

- `IPageSetup.CenterHeader`
- `IPageSetup.FooterTextFormat`
- `IPageSetup.GetHeaderFooterString`
- `IPageSetup.HeaderTextFormat`
- `IPageSetup.LeftHeader`
- `IPageSetup.RightHeader`
- `IPageSetup.SetHeader`