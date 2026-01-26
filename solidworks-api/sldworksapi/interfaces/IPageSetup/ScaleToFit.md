---
type: property
interface: IPageSetup
member: ScaleToFit
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - scaletofit
  - ipagesetup
  - page
  - setup
  - scale
  - fit
  - boolean
readonly: null
---

# IPageSetup.ScaleToFit

Enables or disables scaling the page to fit the printer.

## Signature

```csharp
System.Boolean ScaleToFit {get; set;}
```
## Parameters

None.

## Return Value

True to scale page to fit the printer, false to not

## Remarks

If this property is false, then you can use
IPageSetup::Scale2
to set the scaling factor.