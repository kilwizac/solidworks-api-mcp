---
type: method
interface: IPageSetup
member: SetHeader
returns: System.Boolean
parameters:
  -
    name: Left
    type: System.String
    description: Left-header text
  -
    name: Center
    type: System.String
    description: Center-header text
  -
    name: Right
    type: System.String
    description: Right-header text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.CenterFooter
  - IPageSetup.FooterTextFormat
  - IPageSetup.GetHeaderFooterString
  - IPageSetup.HeaderTextFormat
  - IPageSetup.LeftFooter
  - IPageSetup.RightFooter
  - IPageSetup.SetFooter
keywords:
  - headers
  - footers
  - setheader
  - ipagesetup
  - page
  - setup
  - header
  - left
  - string
  - center
  - right
  - boolean
---

# IPageSetup.SetHeader

Sets the entire page header.

## Signature

```csharp
System.Boolean SetHeader( 
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

- `Left` (System.String): Left-header text
- `Center` (System.String): Center-header text
- `Right` (System.String): Right-header text

## Return Value

True if the header is successfully changed, false if not

## Remarks

This method is equivalent to setting
IPageSetup:LeftHeader
,
IPageSetup::CenterHeader
, and
IPageSetup::RightHeader
.

## See Also

- `IPageSetup.CenterFooter`
- `IPageSetup.FooterTextFormat`
- `IPageSetup.GetHeaderFooterString`
- `IPageSetup.HeaderTextFormat`
- `IPageSetup.LeftFooter`
- `IPageSetup.RightFooter`
- `IPageSetup.SetFooter`