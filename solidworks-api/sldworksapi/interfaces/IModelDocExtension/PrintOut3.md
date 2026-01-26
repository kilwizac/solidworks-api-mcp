---
type: method
interface: IModelDocExtension
member: PrintOut3
returns: void
parameters:
  -
    name: PageArray
    type: System.Object
    description: Range of pages to print (see Remarks)
  -
    name: Copies
    type: System.Int32
    description: Range of pages to print (see Remarks)
  -
    name: Collate
    type: System.Boolean
    description: Number of copies to print
  -
    name: Printer
    type: System.String
    description: True to collate copies, false to not
  -
    name: PrintFileName
    type: System.String
    description: Name of the printer queue (see Remarks )
  -
    name: ConvertToHighQuality
    type: System.Boolean
    description: Name of file to print to instead of Printer
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.ClosePrintPreview
  - IModelDoc2.PrintDirect
  - IModelDoc2.PrintPreview
  - IModelDocExtension.IPrintOut3
  - IModelDocExtension.SaveAs
keywords:
  - printout3
  - imodeldocextension
  - model
  - doc
  - extension
  - print
  - out3
  - page
  - array
  - object
  - copies
  - int32
  - collate
  - boolean
  - printer
  - string
  - file
  - name
  - convert
  - high
  - quality
  - void
---

# IModelDocExtension.PrintOut3

Obsolete. Superseded by IModelDocExtension::PrintOut4.

## Signature

```csharp
void PrintOut3( 
   System.Object
PageArray
,
   System.Int32
Copies
,
   System.Boolean
Collate
,
   System.String
Printer
,
   System.String
PrintFileName
,
   System.Boolean
ConvertToHighQuality
)
```
## Parameters

- `PageArray` (System.Object): Range of pages to print (see Remarks)
- `Copies` (System.Int32): Range of pages to print (see Remarks)
- `Collate` (System.Boolean): Number of copies to print
- `Printer` (System.String): True to collate copies, false to not
- `PrintFileName` (System.String): Name of the printer queue (see Remarks )
- `ConvertToHighQuality` (System.Boolean): Name of file to print to instead of Printer

## Return Value

Unknown.

## Remarks

This method supports printing parts, assemblies, and both single and multisheet drawings.
PageArray
For a part or assembly, the PageArray argument is ignored.
No dialogs or message boxes are displayed.
PageArray contains any number of pairs of values, each pair indicating the start page and end page of a range of pages to print. For example, to print sheets 1, 2, 3, 6, and 7 of a drawing, the array should contain 4 elements; 1, 3, 6, 7. This means to print pages 1-3 and 6-7.
A range can be 5, 5, which means to print just page 5. If the array contains only one value, only that page is printed. If that one element is 0, then all sheets are printed.
If PageArray is an empty array, then all sheets are printed. Also, the array can contain just one value, rather than an array, in which case only that page is printed.
PrintFileName
To print to a file instead to a printer, set PrintFileName to a non-empty name.
If the PrintFileName is empty, then the document is printed to the printer specified in Printer.
If that string is empty, then the document is printed to the default printer for this document. Use
IModelDoc2::Printer
to get or set this value.

## See Also

- `IModelDoc2.ClosePrintPreview`
- `IModelDoc2.PrintDirect`
- `IModelDoc2.PrintPreview`
- `IModelDocExtension.IPrintOut3`
- `IModelDocExtension.SaveAs`