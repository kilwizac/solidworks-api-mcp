---
type: property
interface: IModelDocExtension
member: UsePageSetup
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IPageSetup
keywords:
  - page
  - setup
  - see
  - also
  - ipagesetup
  - documents
  - usepagesetup
  - imodeldocextension
  - model
  - doc
  - extension
  - use
  - int32
  - print
  - drawing
  - vb
  - net
  - vba
readonly: null
---

# IModelDocExtension.UsePageSetup

Gets or sets whether this document uses its own page setup values, SOLIDWORKS Design application page setup values, or setup values on individual drawing sheets.

## Signature

```csharp
System.Int32 UsePageSetup {get; set;}
```
## Parameters

None.

## Return Value

Page setup to use as defined in swPageSetupInUse_e

## Remarks

To retrieve this page setup...
Use...
Application
IModelDocExtension::AppPageSetup
Document
IModelDoc2::PageSetup
or
IModelDoc2::IPageSetup
Sheet
ISheet::PageSetup
or
ISheet::IPageSetup

## Examples

- Print Drawing (C#) (Print_Drawing_as_High_Quality_Example_CSharp.htm)
- Print Drawing (VB.NET) (Print_Drawing_as_High_Quality_Example_VBNET.htm)
- Print Drawing (VBA) (Print_Drawing_as_High_Quality_Example_VB.htm)

## See Also

- `IPageSetup`