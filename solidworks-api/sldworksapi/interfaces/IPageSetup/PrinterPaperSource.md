---
type: property
interface: IPageSetup
member: PrinterPaperSource
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.PrinterPaperLength
  - IPageSetup.PrinterPaperSize
  - IPageSetup.PrinterPaperWidth
keywords:
  - printerpapersource
  - ipagesetup
  - page
  - setup
  - printer
  - paper
  - source
  - int32
readonly: null
---

# IPageSetup.PrinterPaperSource

Gets or sets the printer paper source for this document or sheet.

## Signature

```csharp
System.Int32 PrinterPaperSource {get; set;}
```
## Parameters

None.

## Return Value

Printer paper source (see Remarks )

## Remarks

The property value is one of a set of standard constants defined by the operating system or by a specific printer device; there is no SOLIDWORKS enumeration for these values. See your operating system's and programming language's Help for the details on printers and paper sizes.

## See Also

- `IPageSetup.PrinterPaperLength`
- `IPageSetup.PrinterPaperSize`
- `IPageSetup.PrinterPaperWidth`