---
type: property
interface: IModelDoc2
member: Printer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ClosePrintPreview
  - IModelDoc2.PrintPreview
keywords:
  - print
  - default
  - printer
  - imodeldoc2
  - model
  - doc2
  - string
readonly: null
---

# IModelDoc2.Printer

Gets or sets the default printer for this document.

## Signature

```csharp
System.String Printer {get; set;}
```
## Parameters

None.

## Return Value

Name of the printer, which is case-sensitive

## Remarks

IModelDoc2::PrintDirect
,
IModelDocExtension::PrintOut2
, and
IModelDocExtension::IPrintOut2
use this setting if you pass an empty string to printer.

## See Also

- `IModelDoc2.ClosePrintPreview`
- `IModelDoc2.PrintPreview`