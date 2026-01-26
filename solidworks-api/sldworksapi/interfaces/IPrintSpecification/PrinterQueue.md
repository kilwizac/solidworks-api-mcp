---
type: property
interface: IPrintSpecification
member: PrinterQueue
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - print
  - specification
  - printerqueue
  - iprintspecification
  - printer
  - queue
  - string
readonly: null
---

# IPrintSpecification.PrinterQueue

Gets or sets the printer to use.

## Signature

```csharp
System.String PrinterQueue {get; set;}
```
## Parameters

None.

## Return Value

Printer name; default is IModelDoc2::Printer

## Remarks

This property is valid only if
IPrintSpecification::PrintToFile
is set to false.

## Examples

- IPrintSpecification (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrintSpecification)