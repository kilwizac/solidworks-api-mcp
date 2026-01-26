---
type: property
interface: IPageSetup
member: PrinterPaperWidth
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPageSetup.PrinterPaperSource
keywords:
  - printerpaperwidth
  - ipagesetup
  - page
  - setup
  - printer
  - paper
  - width
  - int32
readonly: null
---

# IPageSetup.PrinterPaperWidth

Gets or sets the user-defined printer paper width for this document or sheet.

## Signature

```csharp
System.Int32 PrinterPaperWidth {get; set;}
```
## Parameters

None.

## Return Value

Paper width (see Remarks )

## Remarks

Use
IPageSetup::PrinterPaperSize
to set the printer paper size. A value for IPageSetup::PrinterPaperSize is a user-defined paper size. In that case, this property indicates the width of that user-defined paper.
Width is in 0.1mm units. To define a paper that is 200mm wide, Width is 2000.
To get or set the printer paper length, use
IPageSetup:;PrinterPaperLength
.

## See Also

- `IPageSetup.PrinterPaperSource`