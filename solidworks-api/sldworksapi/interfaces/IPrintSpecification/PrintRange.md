---
type: property
interface: IPrintSpecification
member: PrintRange
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPrintSpecification.ResetPrintRange
keywords:
  - print
  - specification
  - printrange
  - iprintspecification
  - range
  - object
readonly: null
---

# IPrintSpecification.PrintRange

Gets or sets the range of pages to print.

## Signature

```csharp
System.Object PrintRange {get; set;}
```
## Parameters

None.

## Return Value

Array of first and last page numbers of a range to print (see Remarks )

## Remarks

The array can contain multiple pairs of integers, each pair indicating the start and end pages of a range of pages to print. For example, to print sheets 1, 2, 3, 6, and 7 of a drawing, this array contains 2 pairs of page numbers { 1, 3, 6, 7 } indicating to print pages 1-3 and 6-7. To print only page 6, this array is { 6, 6 }.
Instead of calling this method to set the print ranges, call
IPrintSpecification::AddPrintRange
for each range of pages you want to print.

## See Also

- `IPrintSpecification.ResetPrintRange`