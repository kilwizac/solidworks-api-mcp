---
type: property
interface: IPageSetup
member: Scale2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - scale2
  - ipagesetup
  - page
  - setup
  - double
readonly: null
---

# IPageSetup.Scale2

Gets or sets the scale for printing the page.

## Signature

```csharp
System.Double Scale2 {get; set;}
```
## Parameters

None.

## Return Value

Print scale factor from 1% to 1000%

## Remarks

This value is only used when
IPageSetup::ScaleToFit
is set to false.