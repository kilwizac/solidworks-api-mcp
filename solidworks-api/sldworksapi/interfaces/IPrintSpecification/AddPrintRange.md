---
type: method
interface: IPrintSpecification
member: AddPrintRange
returns: void
parameters:
  -
    name: FirstPage
    type: System.Int32
    description: First page of print range
  -
    name: LastPage
    type: System.Int32
    description: Last page of print range
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IPrintSpecification.PrintRange
  - IPrintSpecification.ResetPrintRange
keywords:
  - print
  - specification
  - addprintrange
  - iprintspecification
  - add
  - range
  - first
  - page
  - int32
  - last
  - void
---

# IPrintSpecification.AddPrintRange

Adds a range of pages to print.

## Signature

```csharp
void AddPrintRange( 
   System.Int32
FirstPage
,
   System.Int32
LastPage
)
```
## Parameters

- `FirstPage` (System.Int32): First page of print range
- `LastPage` (System.Int32): Last page of print range

## Return Value

Unknown.

## Remarks

Call this method multiple times to specify multiple ranges of pages to print.

## Examples

- IPrintSpecification (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrintSpecification)

## See Also

- `IPrintSpecification.PrintRange`
- `IPrintSpecification.ResetPrintRange`