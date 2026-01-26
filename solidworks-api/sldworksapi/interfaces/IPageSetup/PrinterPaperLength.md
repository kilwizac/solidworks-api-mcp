---
type: property
interface: IPageSetup
member: PrinterPaperLength
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
  - printerpaperlength
  - ipagesetup
  - page
  - setup
  - printer
  - paper
  - length
  - int32
readonly: null
---

# IPageSetup.PrinterPaperLength

Gets or sets the user-defined printer paper length for this document or sheet.

## Signature

```csharp
System.Int32 PrinterPaperLength {get; set;}
```
## Parameters

None.

## Return Value

Paper length (see Remarks )

## Remarks

Use
IPageSetup::PrinterPaperSize
to set the printer's paper size. A possible value for IPageSetup::PrinterPaperSize is to have a user-defined paper size. In that case, this property indicates the length of that user-defined paper.
Length is in 0.1mm units. To define a paper that is 250mm long, set Length to 2500.
To get or set the printer paper width, use
IPageSetup::PrinterPaperWidth
.

## See Also

- `IPageSetup.PrinterPaperSource`