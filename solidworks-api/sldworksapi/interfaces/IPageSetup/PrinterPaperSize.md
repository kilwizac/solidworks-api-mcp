---
type: property
interface: IPageSetup
member: PrinterPaperSize
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.PrinterPaperLength
  - IPageSetup.PrinterPaperSource
  - IPageSetup.PrinterPaperWidth
keywords:
  - printerpapersize
  - ipagesetup
  - page
  - setup
  - printer
  - paper
  - size
  - int32
readonly: null
---

# IPageSetup.PrinterPaperSize

Gets or sets the printer paper size for this document or sheet.

## Signature

```csharp
System.Int32 PrinterPaperSize {get; set;}
```
## Parameters

None.

## Return Value

Paper size (see Remarks )

## Remarks

This property is one of a set of standard constants defined by the operating system or by a specific printer device; there is no SOLIDWORKS enumeration for these values. See your operating system's and programming language's Help for the details on printers and paper sizes.

## See Also

- `IPageSetup.PrinterPaperLength`
- `IPageSetup.PrinterPaperSource`
- `IPageSetup.PrinterPaperWidth`